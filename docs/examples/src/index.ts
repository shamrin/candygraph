import { CandyGraph } from "../../../src";
import RelativeTime from "./ex-00500-relative-time";
import TimeAndState from "./ex-00600-time-and-state";
import LinearLog from "./ex-00400-linear-log";
import HealthAndWealth from "./ex-00800-health-and-wealth";
import InterleavedLineSegments from "./ex-01000-interleaved-line-segments";
import MultiViewport from "./ex-00700-multi-viewport";
import SimplePlot from "./ex-00100-simple-plot";
import SimplePlotPoints from "./ex-00200-simple-plot-points";
import ScatterPlot from "./ex-00350-scatter-plot";
import ScatterPlotZoomPan from "./ex-00360-scatter-plot-zoom";
import BarGraph from "./ex-00300-bar-graph";
import PieChart from "./ex-00375-pie-chart";
import Area from "./ex-00250-area-chart";
import Shapes from "./ex-01100-shapes";
import InterleavedShapes from "./ex-01200-interleaved-shapes";
import Polar from "./ex-00900-polar-plot";
import PrecisionPlot from "./ex-01300-precision";

const cg = new CandyGraph();
cg.canvas.width = cg.canvas.height = 1024 * window.devicePixelRatio;
MultiViewport(cg);
TimeAndState(cg);
LinearLog(cg);
InterleavedLineSegments(cg);
SimplePlot(cg);
SimplePlotPoints(cg);
HealthAndWealth(cg);
Polar(cg);
RelativeTime(cg);
ScatterPlot(cg);
ScatterPlotZoomPan(cg);
BarGraph(cg);
PieChart(cg);
Area(cg);
Shapes(cg);
InterleavedShapes(cg);
PrecisionPlot(cg);
