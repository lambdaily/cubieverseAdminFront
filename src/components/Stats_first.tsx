import { useEffect } from 'react';

// Función para cargar la biblioteca de Google Charts
const loadGoogleChartsLibrary = () => {
    const script1 = document.createElement('script');
    script1.src = 'https://www.gstatic.com/charts/loader.js';
    script1.type = 'text/javascript';

    const script2 = document.createElement('script');
    script2.src = 'https://www.google.com/jsapi';
    script2.type = 'text/javascript';

    document.body.appendChild(script1);
    document.body.appendChild(script2);
};

const StatsFirst = () => {
    useEffect(() => {
        loadGoogleChartsLibrary();
        google.charts.load('current', { packages: ['corechart', 'line'] });
        google.charts.setOnLoadCallback(drawLineColors);

        function drawLineColors() {
            var options = {
                chart: {
                    title: 'Box Office Earnings in First Two Weeks of Opening',
                    subtitle: 'in millions of dollars (USD)'
                },
                hAxis: {
                    title: 'Date',
                    textPosition: 'none'
                },
                colors: ['#8ed8e6', '#40aae3', '#28a312']
            };

            fetch("${createLink(controller:'home', action:'dauData')}")
                .then(response => response.json())
                .then(jsonData => {
                    var spinner = document.getElementById('dau-loader');
                    spinner.remove();

                    var data = new google.visualization.DataTable(jsonData);
                    var chart = new google.visualization.LineChart(document.getElementById('dau_chart_div'));
                    chart.draw(data, options);
                })
                .catch(() => {
                    google.visualization.errors.addError(chartDiv, "Failed to load data for the chart.");
                });
        }
    }, []);

    return (
        <div className="div1">
            &nbsp;<span className="text-gray-500">Daily Active Users 30 Days</span>
            <div style={{ width: '100%', height: '100%', marginTop: '-5px' }} id="dau_chart_div">
                <div className="loader" id="dau-loader"></div>
            </div>
        </div>
    );
};

export default StatsFirst;
