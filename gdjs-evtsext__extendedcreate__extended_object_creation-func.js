
if (typeof gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation !== "undefined") {
  gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation = {};
gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.idToCallbackMap = new Map();
gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects1= [];
gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects2= [];


gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedCreate_9595_9595Extended_9595Object_9595Creation_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects1});
gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedCreate_9595_9595Extended_9595Object_9595Creation_9546GDObjectObjects1Objects, eventsFunctionContext.getArgument("X_POS"), eventsFunctionContext.getArgument("Y_POS"), eventsFunctionContext.getArgument("Layer"));
}
{for(var i = 0, len = gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects1[i].setZOrder(eventsFunctionContext.getArgument("Z_Index"));
}
}
{for(var i = 0, len = gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects1[i].setAngle(eventsFunctionContext.getArgument("Angle"));
}
}
}

}


};

gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.func = function(runtimeScene, Object, X_POS, Y_POS, Layer, Z_Index, Angle, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ExtendedCreate"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ExtendedCreate"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "X_POS") return X_POS;
if (argName === "Y_POS") return Y_POS;
if (argName === "Layer") return Layer;
if (argName === "Z_Index") return Z_Index;
if (argName === "Angle") return Angle;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects1.length = 0;
gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects2.length = 0;

gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects1.length = 0;
gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__ExtendedCreate__Extended_Object_Creation.registeredGdjsCallbacks = [];