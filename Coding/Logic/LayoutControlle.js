let layoutController  = {
     palletLayout: "Styles/LayoutTypes/ElegantMonochrome.css",

    changeFont: function(){
        var fontName = document.getElementById("fontChange");
        switch (fontName.FontEx) {
            case "font1":
                fontName.FontEx = "font2";
            break;
            case "font2":
                fontName.FontEx = "font3";
            break;
            case "font3":
                fontName.FontEx = "font4";
            break;
            case "font4":
                fontName.FontEx = "font5";
            break;
            case "font5":
                fontName.FontEx = "font6";
            break;
            case "font6":
                fontName.FontEx = "font7";
            break;
            case "font7":
                fontName.FontEx = "font8";
            break;
            case "font8":
                fontName.FontEx = "font9";
            break;
            case "font9":
                fontName.FontEx = "font10";
            break;
            case "font10":
                fontName.FontEx = "font11";
            break;
            case "font11":
                fontName.FontEx = "font12";
            break;
            default:
                fontName.FontEx = "font1";
            break;
        }
        fontName.setAttribute('FontEx', fontName.FontEx);
        var fontSave = fontName.FontEx;
        localStorage.setItem('fontStyle', fontSave);
        this.changeButtonFont();
    },

    changeButtonFont(){
        var toChangeEl = document.querySelectorAll('[FontEx]')
        toChangeEl.forEach(function(Button){
            Button.setAttribute('FontEx', localStorage.getItem('fontStyle'));
        });
    },

    cloneParameter: function(){
        var clonePal = document.getElementById('pagePallet').href;
        localStorage.setItem('palStyle', clonePal);
    },
    setClone: function(){
        var pagePallet = document.getElementById('pagePallet');
        var pageFont = document.getElementById('fontChange');
        pagePallet.href = localStorage.getItem('palStyle');
        pageFont.setAttribute('FontEx', localStorage.getItem('fontStyle'));
    },

    changePalet: function(){
        switch (this.palletLayout) {
            case "Styles/LayoutTypes/ElegantMonochrome.css":
                this.palletLayout = "Styles/LayoutTypes/DreamyMeadow.css";
            break;
            case "Styles/LayoutTypes/DreamyMeadow.css":
                this.palletLayout = "Styles/LayoutTypes/MistyMoarning.css";
            break;
            case "Styles/LayoutTypes/MistyMoarning.css":
                this.palletLayout = "Styles/LayoutTypes/SerenityDream.css";
            break;
            case "Styles/LayoutTypes/SerenityDream.css":
                this.palletLayout = "Styles/LayoutTypes/SunshineBliss.css";
            break;
            case "Styles/LayoutTypes/SunshineBliss.css":
                this.palletLayout = "Styles/LayoutTypes/VintageCharm.css";
            break;
            default:
                this.palletLayout = "Styles/LayoutTypes/ElegantMonochrome.css";
            break;
        }
        var currentPal = document.getElementById('pagePallet');
        currentPal.href = this.palletLayout;
        this.cloneParameter();
    }

}