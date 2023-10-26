const { inputInquirer, inquirerMenu, inquirerPausa } = require("./helpers/inquirer")
const Busqueda = require("./models/Busqueda")



const main = async () => {
    console.clear()
    let opt = 1
    const busqueda = new Busqueda()

    do {
        opt = await inquirerMenu()

        switch (opt) {
            case 1:

                let lugar = await inputInquirer('Ciudad')
                console.log(lugar)

                console.log('\nInformación de la Ciudad \n'.green)
                console.log('Ciudad: ')
                console.log('Lat: ')
                console.log('Lon: ')
                console.log('Temperatura: ')
                console.log('Minima: ')
                console.log('Máxima: ')
                break;

            case 2:
                console.log('Fuera de servicio'.red)
                break;
            case 0:
                console.clear()
                break;

        }
        if (opt !== 0) await inquirerPausa()

    } while (opt !== 0)




}

main();