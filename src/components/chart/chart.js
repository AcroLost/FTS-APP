import React from 'react';
import { VictoryPie } from 'victory';

const Chart = ({ positive, negative }) => {

    return (
        <div className="chart">

            <VictoryPie width={330} height={330} innerRadius={60}
                padAngle={5}
                style={{
                    data: {
                        stroke: "#c43a31", strokeWidth: 1
                    }
                }}
                colorScale={["rgb(230, 118, 137)", "#74A8DA"]}
                data={[
                    { x: "Neg", y: Object.keys(negative).length - 1 },
                    { x: "Pos", y: Object.keys(positive).length - 1 }
                ]}
            />
        </div>
    );
}

export default Chart;