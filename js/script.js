var spec = (function(){
    function calculate(cement, product, plastic, aggrigate) {
        let concreteData = {
            "M300": {
                "150": 0.65,
                "250": 0.50,
                "300": 0.40,
                "400": 0
            },
            "M400": {
                "150": 0.75,
                "250": 0.56,
                "300": 0.50,
                "400": 0.40
            },
            "M500": {
                "150": 0.85,
                "250": 0.64,
                "300": 0.60,
                "400": 0.46
            },
            "M600": {
                "150": 0.95,
                "250": 0.68,
                "300": 0.63,
                "400": 0.50
            }
        }
        let plastData = {
            "1": {
                "g10": 215,
                "g20": 200,
                "g40": 185,
                "g80": 170,
                "c10": 230,
                "c20": 215,
                "c40": 200,
                "c80": 185
            },
            "2": {
                "g10": 205,
                "g20": 190,
                "g40": 175,
                "g80": 160,
                "c10": 220,
                "c20": 205,
                "c40": 190,
                "c80": 175
            },
            "3": {
                "g10": 195,
                "g20": 180,
                "g40": 165,
                "g80": 150,
                "c10": 210,
                "c20": 195,
                "c40": 180,
                "c80": 165
            },
            "4": {
                "g10": 185,
                "g20": 170,
                "g40": 155,
                "g80": 140,
                "c10": 200,
                "c20": 185,
                "c40": 170,
                "c80": 155
            }
        }

        let coef = concreteData[cement][product];
        let liter = plastData[plastic][aggrigate];

        if(f(aggrigate) === true)
        {
            coef = coef + 0.05;
        }

        let result = liter / coef;

        $("#cement").html("<span class='text-primary'>"+Math.round(result)+" \n" + "Kilogram.</span>");
        $("#sand").html("<span class='text-primary'>"+Math.round(result) * 4+" Kilogram.</span>");
        $("#crusher").html("<span class='text-primary'>"+Math.round(result) * 4+" Kilogram.</span>");
        $("#watere").html("<span class='text-primary'>"+liter+" Liters.</span>");
    }

    function f(aggrigate) {

        let result = false;

        switch(aggrigate) {
            case 'g10':
                break;
            case 'g20':
                break;
            case 'g40':
                break;
            case 'g80':
                break;
            case 'c10':
                result = true;
                break;
            case 'c20':
                result = true;
                break;
            case 'c40':
                result = true;
                break;
            case 'c80':
                result = true;
                break;
        }

        return result;
    }

    return {
        calculate: calculate
    }
})();