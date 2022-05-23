import { server } from "./index.js";
var PORT = process.env.PORT || 5000;
server.listen(PORT, function () {
    console.log("Running on port ".concat(PORT));
});
