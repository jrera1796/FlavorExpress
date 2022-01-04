module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
        return word;
    },
    format_list: strArray => {

        let newString = [];
        let tempArry = strArray.split('\n');
        for (let i = 0; i < tempArry.length; i++) {
            newString[i] = strArray.split('\n');
        }
        return newString;
        // let tempStr = strArray.split('\n');
        // let counter = 0;
        // for (let i = 0; i < tempStr.length; i++) {
        //     if (i === counter) {
        //         return tempStr[i] + counter;
        //     }
        //     counter++;
        // }
        // for (let i = 0; i < strArray.length; i++) {
        //     return strArray.split('\n')[i];
        // }


        // let i = 0;
        // while (i < strArray.length) {
        //     return strArray.split('\n')[i];
        // }
        //return strArray.replace('\n', 'yes');
        //return strArray.split('\n');
        // for (let i = 0; i < strArray.length; i++) {
        //     return strArray.replace('\n', 'yes');
        // }
        //return strArray;
        // for (let i = 0; i < strArray.length; i++) {
        //     return (strArray.split('\n')[i] + '\r\n');
        // }
        // let tempStr = strArray.split('\n');
        // let returnVar = '';
        // for (let i = 0; i < tempStr.length; i++) {
        //     returnVar += tempStr[i] + console.log('\n\n');
        // }
        // return returnVar;



        //return strArray.split('|')
        // let tempStr = strArray.split('\n');
        // tempStr.forEach(function(element) {
        //         return element;
        //     })


        // for (let i = 0; i < tempStr.length; i++) {
        //     return tempStr[i];
        // }
        // let newTemp = strArray.split('\n');
        // let newStuff = '';
        // for (let i = 0; i < newTemp.length; i++) {
        //     var thing = document.createElement('p');
        //     newStuff += newTemp[i] + thing;
        // }
        // return newStuff;
    },
    ifEquals: function(arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    }
}