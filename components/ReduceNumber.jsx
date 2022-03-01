export default function ReduceNumber(number){
    number = parseFloat(number)
    if(number > 1_000_000_000_000.00){
        return (number / 1_000_000_000_000.00).toFixed(2) + " B"
    }
    else if(number > 1_000_000_000.00){
        return (number / 1_000_000_000).toFixed(2) + ' MM'
    }else if(number > 1_000_000.00){
        return (number / 1_000_000).toFixed(2) + ' M'
    }
    return number
}