import { authService } from './authService';
import { baseURL } from '../common/baseUrl';
export const login = async (
  email: string,
  password: string,
): Promise<string> => {
  const response = await fetch(`${baseURL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error en la autenticación: ${errorText}`);
  }
  const data = await response.json();
  authService.setToken(data.accessToken);
  return data.accessToken;
};

//pasar a authService.ts
export const logout = () => {
  authService.removeToken();
  localStorage.removeItem('token');
  localStorage.removeItem('jwtToken');
  return;
};
//pasar a authService.ts
export const fetchWithToken = async (
  url: string,
  options: RequestInit = {},
): Promise<any> => {
  const jwtToken = authService.getToken();
  if (!jwtToken) {
    throw new Error('Token JWT no encontrado');
  }
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${jwtToken}`,
  };
  const response = await fetch(`${baseURL}${url}`, { ...options, headers });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error en la solicitud con token JWT: ${errorText}`);
  }
  return response.json();
};

//pasar a carsService.ts
interface PayloadItem {
  toggleFn: string;
  toggleVal: string;
  columnName: string | undefined;
  columnNameDB: string | undefined;
  columnNum: number;
}

//pasar a carsService.ts
interface TableColumn {
  name?: string;
  nameDB?: string;
  // Add other properties as needed
}

//pasar a carsService.ts
type TransformObjectFunction<T> = (
  prefix: string,
  data: T[],
) => Record<string, unknown>[];
const transformObject: TransformObjectFunction<Record<string, unknown>> = (
  prefix,
  data,
) => {
  return data.map((item) => {
    const transformedItem: Record<string, unknown> = {};
    let columnIndex = 0;
    Object.keys(item).forEach((key) => {
      transformedItem[`${prefix}${columnIndex}`] = item[key];
      columnIndex++;
    });
    return transformedItem;
  });
};

//pasar a carsService.ts
export const ListTableData = async (
  name: string,
  limit: number,
  order: string,
  column: string,
  page: number,
  json: object,
): Promise<any> => {
  try {
    let okFiltros = Object.values(json).some((value) => value !== '');
    let url = `${baseURL}/${name}?limit=${limit}&order=${order}&column=${column}&page=${page}`;
    
    // Agregar filtros a la URL si están presentes
    if (okFiltros) {
      url += `&filters=${encodeURIComponent(JSON.stringify(json))}`;
    }
  
    const token = localStorage.getItem('token');
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { data, metadata } = await response.json();
    
    const dataT = transformObject('column', data);
  
    const payload: PayloadItem[] = metadata.renderColumns.map(
      (column: TableColumn, index: number) => ({
        toggleFn: `setToggleOrderColumn${index}`,
        toggleVal: `toggleOrderColumn${index}`,
        columnName: column?.name,
        columnNameDB: column?.nameDB,
        columnNum: index,
      }),
    );
  
    return { data: dataT, metadata, payload };
  } catch (error) {}
};
