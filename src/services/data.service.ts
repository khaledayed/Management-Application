

export class dataService {
    listBook: any[] = [
        {
            name: "book1",
            isPreter: true,
            description: "Activés ou désactivés selon l'état actuel de l'élement"
        },
        {
            name: "book2",
            isPreter: false,
            description: "Activés ou désactivés selon l'état actuel de l'élement"
        }
    ]
    listCD: any[] = [
        {
            name: "cd1",
            isPreter: true,
            description: "Activés ou désactivés selon l'état actuel de l'élement"
        },
        {
            name: "cd2",
            isPreter: false,
            description: "Activés ou désactivés selon l'état actuel de l'élement"
        }
    ]

    ParseTreeResult(index, type){
        if (type == 'cd'){
            this.listCD[index].isPreter = !this.listCD[index].isPreter;
        }
        else if (type =='book'){
            this.listBook[index].isPreter = !this.listBook[index].isPreter;
        }
    }
}