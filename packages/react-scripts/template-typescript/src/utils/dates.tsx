import dateFns from 'date-fns';

export const parseStringToDate = (value: string, dateDelimiter: string): Date  => {

    let dateValue = new Date();
    
    
    if(value.indexOf(dateDelimiter) !== -1) {
        const dateZones = value.split(dateDelimiter).length;
        const NUMBER_DATE_ZONES = 3;
        const YEAR_LENGTH = 4;        
        if(dateZones === NUMBER_DATE_ZONES && value.split(dateDelimiter)[2].length === YEAR_LENGTH) {
            const year : number = Number(value.split(dateDelimiter)[2])
            const month : number = Number(value.split(dateDelimiter)[1]) - 1;
            const day  : number= Number(value.split(dateDelimiter)[0]);

            dateValue = new Date(year, month, day);
        }
    } else {        
        throw `The value don't has the delimiter`;
    }
    return dateValue; 
}

export const parseDateToString = (value: Date, format: string): string => {

    return dateFns.format(value, format);

}