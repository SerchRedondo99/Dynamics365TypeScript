const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        Contacto: "./src/Entidades/Contacto/Principal.ts",
        Cuenta: "./src/Entidades/Cuenta/Principal.ts",
        Utilidades: "./src/Utilidades/Utilidades.ts"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        },],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name]/[name].js",
        path: path.resolve(__dirname, "dist"),
        // Set this to your namespace e.g. cds.ClientHooks
        //library: ["cds", "ClientHooks"],
        library: ["[name]", "[name]"],
        libraryTarget: "var",
    },
};
