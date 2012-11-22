/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("vizapp.theme.Decoration",
{
  extend : qx.theme.indigo.Decoration,

  decorations :
  {
    "app-footer" : {
      decorator : [
        qx.ui.decoration.MLinearBackgroundGradient,
        qx.ui.decoration.MDoubleBorder,
        qx.ui.decoration.MBackgroundColor
      ],

      style :
      {
        innerWidthTop: 1,
        innerColorTop: "highlight-shade",
        widthTop: 9,
        colorTop: "highlight",

        gradientStart : ["#505154", 0],
        gradientEnd : ["#323335", 100],

        backgroundColor : "#323335"
      }
    },
    "app-svg" :
    {   
      decorator: qx.ui.decoration.Uniform,
    
      style :
      {
        width : 1,
        backgroundColor: "white",
        color : "border-main"
      }
    }

  }
});
