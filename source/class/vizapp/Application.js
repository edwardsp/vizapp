/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/* ************************************************************************

#asset(vizapp/*)
#asset(qx/icon/Tango/22/actions/view-refresh.png)
#ignore(Viz)
************************************************************************ */

/**
 * This is the main application class of your custom application "vizapp"
 */
qx.Class.define("vizapp.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // container layout
      var mainContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox());
      this.getRoot().add(mainContainer, { edge : 0 });

      // header
      var headerContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox());
      headerContainer.setAppearance("app-header");
      var title = new qx.ui.basic.Label(this.tr("Vizapp"));
      var desc = new qx.ui.basic.Label(this.tr("web-based graphviz application"));
      desc.setFont("default");
      headerContainer.add(title);
      headerContainer.add(new qx.ui.core.Spacer(), {flex:1});
      headerContainer.add(desc);
      mainContainer.add(headerContainer);

      // toolbar
      var toolbar = new qx.ui.toolbar.ToolBar();
      mainContainer.add(toolbar, {flex:0});
      var updateButton = new qx.ui.toolbar.Button(this.tr("Update"), "qx/icon/Tango/22/actions/view-refresh.png");
      updateButton.setToolTipText(this.tr("Update the view"));
      toolbar.add(updateButton);

      // main section
      var splitContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox());
      splitContainer.setAppearance("app-main");
      var mainsplit = new qx.ui.splitpane.Pane("horizontal");
      splitContainer.add(mainsplit, {flex:1});
      mainContainer.add(splitContainer, {flex:1});

      var editor = new vizapp.Editor();
      editor.addListener("disableHighlighting", function() {
        this.__toolbar.enableHighlighting(false);
      }, this);
      editor.init();

      var scroller = new qx.ui.container.Scroll();
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox());
      scroller.setDecorator("app-svg");
      var graph = new qx.ui.basic.Label()
      graph.set({alignX:"center"});
      graph.setRich(true);
      graph.setAllowGrowX(false);
      graph.setAllowGrowY(false);
      graph.setAllowShrinkX(false);
      graph.setAllowShrinkY(false);
      container.add(graph);
      scroller.add(container);

      editor.setCode("digraph G{ A->B->C }");
      graph.setValue(Viz(editor.getCode(), "svg"));

      mainsplit.add(editor, 1);
      mainsplit.add(scroller, 1);

      // footer
      var footerContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox());
      footerContainer.setAppearance("app-footer");
      var footerText = new qx.ui.basic.Label(this.tr("Paul Edwards"));
      footerContainer.add(new qx.ui.core.Spacer(), {flex:1});
      footerContainer.add(footerText);
      mainContainer.add(footerContainer);


      // update logic
      updateButton.addListener("execute", function() {
        graph.setValue(Viz(editor.getCode(), "svg"));
      }, this);

    }
  }
});
