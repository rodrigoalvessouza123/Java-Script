const info = {
        titulo: "Transformers",
        anoDeLancamento: "2007",
        diretor: "Michael Bay",
        roteirista: "Alex Kurtzman",

        genero: "Ação",
        elenco:{
            a1: ["Nome: Peter Cullen","Papel: Optimus Prime"],
            a2: ["Nome: Hugo Weaving","Papel: Megatron"],
            a3: ["Nome: Shia LaBeolf","Papel: Sam Witwicky"],
            a4: ["Nome: Charles Adler","Papel: Starscream"],
            a5: ["Nome: Jess Harnell","Papel: Ironhide"],
            a6: ["Nome: Megan Fox","Papel: Mikaela Banes"],
            a7: ["Nome: Josh Duhamel","Papel: Sargento Lennox"],
            f: function imprimir(){
                console.log(info)
            }
        }
    }
    info.elenco.f()