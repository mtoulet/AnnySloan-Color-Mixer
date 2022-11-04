function handleClick(event)
        {
        var index = document.getElementById('color1').selectedIndex;
        //alert("value="+document.getElementById('color1').value);
        //alert("text="+document.getElementById('color1').options[index].text);
        var value1 = document.getElementById('color1').value;
        var value2 = document.getElementById('color2').value;
        var value3 = document.getElementById('color3').value;

        var colorsquare1 = new RGBColor(value1);
        var r1 = colorsquare1.r;
        var g1 = colorsquare1.g;
        var b1 = colorsquare1.b;
        var colorsquare2 = new RGBColor(value2);
        var r2 = colorsquare2.r;
        var g2 = colorsquare2.g;
        var b2 = colorsquare2.b;
        var colorsquare3 = new RGBColor(value3);
        var r3 = colorsquare3.r;
        var g3 = colorsquare3.g;
        var b3 = colorsquare3.b;
        var num1 = document.getElementById('number1').value;
        var num2 = document.getElementById('number2').value;
        var num3 = document.getElementById('number3').value;
        if (value1 == "0")
          {
          num1 = 0;
          }
        if (value2 == "0")
          {
          num2 = 0;
          }
        if (value3 == "0")
          {
          num3 = 0;
          }

        var i1 = parseInt(num1);
        var i2 = parseInt(num2);
        var i3 = parseInt(num3);
        var totalparts = i1 + i2 + i3;
        var red = parseInt((r1*i1 + r2*i2 + r3*i3)/totalparts);
        var green = parseInt((g1*i1 + g2*i2 + g3*i3)/totalparts);
        var blue = parseInt((b1*i1 + b2*i2 + b3*i3)/totalparts);
        var mixcolor = RGB2HTML(red,green,blue);
        var mixstring = 'rgb(' + red + ',' + green + ',' + blue + ')';
            document.getElementById("rectmix").style.backgroundColor=mixstring;
            var recipetext = "  RECIPE:"
            if (i1 > 0)
              {
              var selectedtext1 = getSelectedText("color1");
              if (selectedtext1 != "Select a Color")
                {
                recipetext = recipetext + "<br>" + i1 + " " + selectedtext1;
                }
              }
            if (i2 > 0)
              {
              var selectedtext2 = getSelectedText("color2");
              if (selectedtext2 != "Select a Color")
                {
                recipetext = recipetext + "<br>" + i2 + " " + selectedtext2;
                }
              }
            if (i3 > 0)
              {
              var selectedtext3 = getSelectedText("color3");
              if (selectedtext3 != "Select a Color")
                {
                recipetext = recipetext + "<br>" + i3 + " " + selectedtext3;
                }
              }
            document.getElementById("recipe").innerHTML = recipetext;
            return false; // prevent further bubbling of event
        }

function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}
function RGB2HTML(red, green, blue)
{
    var decColor =0x1000000+ blue + 0x100 * green + 0x10000 *red ;
    return '#'+decColor.toString(16).substr(1);
}

function mixcolor()
        {
        var color1 = document.getElementById('color1'.value);
        var color2 = document.getElementById('color2'.value);
        var color3 = document.getElementById('color3'.value);
        var r1 = color1.getRed();
        var g1 = color1.getGreen();
        var b1 = color1.getBlue();
        var colormix = rgb(r1,g1,b1);
        return color1;
        }

function fillcolor(colorchoice, rectangle)
        {
        var index = document.getElementById(colorchoice).selectedIndex;
        var value1 = document.getElementById(colorchoice).value;
        var selectedText = getSelectedText(colorchoice);
        if (selectedText == "Select a Color")
          {
          value1 = "white";
          }
        document.getElementById(rectangle).style.backgroundColor=value1;
        }

function getcolor(colorname)
        {
        var colorvalue;
        if (colorname == 'Antibes Green')
            colorvalue = '#123456';
        else
            colorvalue = '#812233';
        return colorvalue;
        }

function fillcolors()
        {
var data = [
    { text: 'Select a Color', value: '0' },
    { text: 'Amsterdam Green', value: 'rgb(29,66,48)' },
    { text: 'Antibes Green', value: 'rgb(80,154,79)' },
    { text: 'Antoinette', value: 'rgb(229,196,187)' },
    { text: 'Arles', value: 'rgb(227,166,86)' },
    { text: 'Athenian Black', value: 'rgb(13,11,12)' },
    { text: 'Aubusson Blue', value: 'rgb(48,71,79)' },
    { text: 'Barcelona Orange', value: 'rgb(217,130,61)' },
    { text: 'Burgundy', value: 'rgb(106,41,49)' },
    { text: 'Capri Pink', value: 'rgb(203,4,83)' },
    { text: 'Chateau Grey', value: 'rgb(164,156,119)' },
    { text: 'Chicago Grey', value: 'rgb(185,185,185)' },
    { text: 'Coco', value: 'rgb(140,124,101)' },
    { text: 'Country Grey', value: 'rgb(196,181,153)' },
    { text: 'Cream', value: 'rgb(252,240,190)' },
    { text: 'Duck Egg Blue', value: 'rgb(151,172,157)' },
    { text: 'Emile', value: 'rgb(140,117,123)' },
    { text: 'Emperors Silk', value: 'rgb(178,56,71)' },
    { text: 'English Yellow', value: 'rgb(225,207,79)' },
    { text: 'Firle', value: 'rgb(164,163,35)' },
    { text: 'Florence', value: 'rgb(0,137,112)' },
    { text: 'French Linen', value: 'rgb(167,157,132)' },
    { text: 'Giverny', value: 'rgb(1,141,177)' },
    { text: 'Graphite', value: 'rgb(73,75,70)' },
    { text: 'Greek Blue', value: 'rgb(106,136,162)' },
    { text: 'Henrietta', value: 'rgb(190,152,165)' },
    { text: 'Honfleur', value: 'rgb(114,86,62)' },
    { text: 'Lem Lem', value: 'rgb(195,215,156)' },
    { text: 'Louis Blue', value: 'rgb(173,190,206)' },
    { text: 'Napoleonic Blue', value: 'rgb(59,74,117)' },
    { text: 'Old Ochre', value: 'rgb(221,202,169)' },
    { text: 'Old Violet', value: 'rgb(93,100,119)' },
    { text: 'Old White', value: 'rgb(239,236,221)' },
    { text: 'Olive', value: 'rgb(116,107,74)' },
    { text: 'Original', value: 'rgb(238,233,214)' },
    { text: 'Oxford Navy', value: 'rgb(23,35,61)' },
    { text: 'Paloma', value: 'rgb(192,182,180)' },
    { text: 'Paris Grey', value: 'rgb(190,192,181)' },
    { text: 'Primer Red', value: 'rgb(127,78,74)' },
    { text: 'Provence', value: 'rgb(120,161,153)' },
    { text: 'Pure White', value: 'rgb(246,246,238)' },
    { text: 'Rodmell', value: 'rgb(118,94,110)' },
    { text: 'Scandinavian Pink', value: 'rgb(196,120,104)' },
    { text: 'Svenska Blue', value: 'rgb(164,189,183)' },
    { text: 'Tilton', value: 'rgb(235,189,69)' },
    { text: 'Versailles', value: 'rgb(195,181,136)' }
];

var selections = document.getElementsByName('color0');
for (var i=0;i<selections.length;i++)
{
var select = selections[i];
select.options.length = 0; // clear out existing items
for(var j=0; j < data.length; j++) {
    var d = data[j];
    select.options.add(new Option(d.text, d.value))
}     }
        }

function init()
        {
        fillcolors();
        }

function fillcolorsm()
        {
var data = [
    { text: 'Select a Color', value: '0' },
    { text: 'Apron Strings', value: 'rgb(211,88,117)' },
    { text: 'Artissimo', value: 'rgb(85,108,126)' },
    { text: 'Boxwood', value: 'rgb(79,92,49)' },
    { text: 'Curio', value: 'rgb(66,61,67)' },
    { text: 'Dried Lavender', value: 'rgb(129,140,158)' },
    { text: 'Eulalies Sky', value: 'rgb(192,218,215)' },
    { text: 'Flow Blue', value: 'rgb(68,110,134)' },
    { text: 'French Enamel', value: 'rgb(75,137,162)' },
    { text: 'Grain Sack', value: 'rgb(208,204,201)' },
    { text: 'Ironstone', value: 'rgb(242,237,233)' },
    { text: 'Kitchen Scale', value: 'rgb(102,142,141)' },
    { text: 'Linen', value: 'rgb(239,234,215)' },
    { text: 'Lucketts Green', value: 'rgb(125,141,94)' },
    { text: 'Mustard Seed Yellow', value: 'rgb(236,186,87)' },
    { text: 'Shutter Gray', value: 'rgb(155,165,174)' },
    { text: 'Tricycle', value: 'rgb(170,33,51)' },
    { text: 'Trophy', value: 'rgb(133,136,129)' },
    { text: 'Typewriter', value: 'rgb(64,59,55)' }
];

var selections = document.getElementsByName('color0');
for (var i=0;i<selections.length;i++)
{
var select = selections[i];
select.options.length = 0; // clear out existing items
for(var j=0; j < data.length; j++) {
    var d = data[j];
    select.options.add(new Option(d.text, d.value))
}     }
        }

function initm()
    {
    fillcolorsm();
    }