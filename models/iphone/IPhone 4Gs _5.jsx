#target AfterEffects

/**************************************
Scene : Scene
Resolution : 1280 x 720
Duration : 10.416667
FPS : 24.000000
Date : 2012-06-04 23:33:25.923000
Exported with io_export_after_effects.py
**************************************/



function compFromBlender(){

var compName = prompt("Blender Comp's Name \nEnter Name of newly created Composition","BlendComp","Composition's Name");
if (compName){
var newComp = app.project.items.addComp(compName, 1280, 720, 1.000000, 10.416667, 24);
newComp.displayStartTime = 0.083333;


// **************  CAMERA 3D MARKERS  **************


// **************  OBJECTS  **************


// **************  LIGHTS  **************


// **************  CAMERAS  **************


var _Camera = newComp.layers.addCamera("_Camera",[0,0]);
_Camera.autoOrient = AutoOrientType.NO_AUTO_ORIENT;
_Camera.property("position").setValue([1161.011877,228.399906,-311.547637],);
_Camera.property("orientation").setValue([6.118554,-65.479056,5.570993],);
_Camera.property("zoom").setValue(1400.000000,);



}else{alert ("Exit Import Blender animation data \nNo Comp's name has been chosen","EXIT")};}


app.beginUndoGroup("Import Blender animation data");
compFromBlender();
app.endUndoGroup();


