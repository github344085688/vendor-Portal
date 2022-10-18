<template>
    <div class="" style="width: 400px; height: 200px; margin-top: 150px">
        <Line
                :chart-options="chartOptions"
                :chart-data="chartData"
                :chart-id="chartId"
                :dataset-id-key="datasetIdKey"
                :plugins="plugins"
                :css-classes="cssClasses"
                :styles="styles"
                :width="width"
                :height="height"
        />
    </div>

</template>
