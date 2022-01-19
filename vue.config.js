module.exports = {
    publicPath: '/myresume/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Meu Currículo Grátis";
                return args;
            })
    }
}