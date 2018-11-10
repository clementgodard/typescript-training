class Musician
{
    public static instances: Musician[];

    public instrument: String;
    public name: String;
    public dead: boolean;
    public description: String;
    public band: String;
    public allBands: String;

    constructor(instrument: String = 'guitar')
    {
        this.instrument = instrument;
        this.description = 'this musician plays ' + this.instrument;
        this.allBands = 'this musician played in ';
    }

    public play(): String
    {
        return 'I\'m playing ' + this.instrument;   
    }

    public static create(nom?: string): Musician
    {
        const res: Musician = new Musician(nom)
        this.instances.push(res);
        return res;
    }

    public setBand(nom: String)
    {
        this.band = nom;
        this.allBands += this.band + ', ';
    }

}

class Rockman extends Musician
{
    public play(): String
    {
        return 'I\'m playing guitar';
    }
}