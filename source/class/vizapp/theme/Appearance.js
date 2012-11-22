/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("vizapp.theme.Appearance",
{
  extend : qx.theme.indigo.Appearance,

  appearances :
  {
    "app-header" :
    {
      style : function(states)
      {
        return {
          font : "headline",
          textColor : "text-selected",
          backgroundColor: "background-selected-dark",
          decorator: "app-header",
          padding : [10, 10, 10, 10]
        };
      }
    },
    "app-footer" :
    {
      style : function(states)
      {
        return {
          font : "default",
          textColor : "text-selected",
          backgroundColor: "background-selected-dark",
          decorator: "app-footer",
          padding : [5, 10, 5, 10]
        };
      }
    },
    "app-main" :
    {
      style : function(states)
      {
        return {
          backgroundColor: "light-background",
          padding : [0, 10, 10, 10]
        };
      }
    }
  }
});
