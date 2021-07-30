
export function getSlotTime(row: number): string {
    const FIRST_SLOT = 8;
    const SLOT_SIZE = 0.5;

    const the_slot = FIRST_SLOT + row * SLOT_SIZE;
    
    let hh = Math.floor(the_slot).toString();
    if(hh.length === 1){
        hh = '0'+hh;
    }
    const ss = the_slot%1 === 0 ? '00': '30'
    
    return `${hh}:${ss}`;
}