// Sketchfab Viewer API: Start/Stop the viewer
var version = "1.12.1";
// var uid = "784e95f4f22545199be7e165af6437f8";
var iframe = document.getElementById("api-frame");
var idAttributeValue = iframe.getAttribute("data-uid");
var uid = idAttributeValue

// var urlParams = new URLSearchParams(window.location.search);
var autoSpin = 0.0;
// console.log("URL Params: " + urlParams);

// if (urlParams.has("autospin")) {
//   autoSpin = urlParams.get("autospin");
// }
// console.log("autoSpin: " + autoSpin);
// if (urlParams.has("id")) {
//   uid = urlParams.get("id");
// }

var textures = [];
var client = new window.Sketchfab(version, iframe);
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 2;
canvas.height = 2;
var myMaterials;
var newTextureUID;
// var host = window.location.host;
var NewTextureURL = window.location.href + '_DSC4201.jpg';
var getColorAsTextureURL = function getColorAsTextureURL(color) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 2, 2);
  return canvas.toDataURL('image/png', 1.0);
};
var blackTextureURL = getColorAsTextureURL('black');
var error = function () {
  console.error("Sketchfab API error");
};
var uiSettings = {
  controls: {
    zoom: 1 // Cho phép tính năng zoom
  }
};
//var myNodesByNameFromGraph = {};
var idxNodes = 0;
var myNodesByNameFromMap = {};
var officialNodes = [];

/*
var computeAssociativeArray = function(node){
    if (!node)  return;
    var name = node.name;
    if (!name) name = "noname_" + idxNodes++;       
                debugger;         		
    myNodesByNameFromGraph[name] = node;
    if (!node.children || !node.children.length) return;
    for (var i = 0; i < node.children.length; i++){
      computeAssociativeArray(node.children[i]);    
    }
}
*/

var success = function (api) {
  api.addEventListener('viewerstart', function () {
    console.log('viewerstart');
  });
  api.addEventListener('viewerstop', function () {
    console.log('viewerstop');
  });
  function makeMyModelTextured(enabled) {
    for (var i = 0; i < myMaterials.length; i++) {
      var m = myMaterials[i];
      // console.log('day la gi ', JSON.stringify(m));
      // m.channels.AlbedoPBR.enable = true;

      if (m.name == 'FIATMat' || myMaterials.length > 10) {
        console.log('textures', textures);
        console.log('textures[m.name]', textures[m.name]);

        if (enabled) {
          console.log('Materials Revert Item: ');
          m.channels.AlbedoPBR.texture = textures[m.name];
          // m.channels.AlbedoPBR.color = false;

          //api.updateTexture(url, m.channels.AlbedoPBR.texture.uid,
          // function(  ) {
          //   api.setMaterial(m);
          //}
          //);
        } else {
          m.channels.AlbedoPBR.texture = false;
          // m.channels.AlbedoPBR.color = [1, 0, 0, 0];

          console.log('Materials Update Item: ', m.name, ' - New texture: ' + NewTextureURL, newTextureUID);
          m.channels.AlbedoPBR.texture = {
            uid: newTextureUID,
            // uid: "f8d9092361a94f529c084d830e0dca77",
          };
        }
      }
      api.setMaterial(m);
    }
  }
  api.start(function () {
    window.console.log('Viewer started');
    document.getElementById('start').addEventListener('click', function () {
      api.start();
    });
    document.getElementById('stop').addEventListener('click', function () {
      api.stop();
    });

    document.getElementById('focus').addEventListener('click', function () {
      api.setCameraLookAt([0, -7.413438214244611, 0.3106502245956986], [-2.022618784987591, -0.43206851384109185, 1.0124867100509538], 2, function (err) {
        if (!err) {
          window.console.log('Camera moved');
        }
      });
    });

    document.getElementById('setCameraConstraints').addEventListener('click', function () {
      api.setEnableCameraConstraints(true, function () {
        console.log('cam constraints enabled');
        api.setCameraConstraints({
          down: 1,
          fov: 1,
          left: 1,
          nearFarRatio: 0.005,
          position: [-9.211534864074402, -7.413438214244611, 0.3106502245956986],
          right: 0.8567979964335799,
          target: [-2.022618784987591, -0.43206851384109185, 1.0124867100509538],
          up: 0.5,
          useCameraConstraints: true,
          usePanConstraints: true,
          usePitchConstraints: false,
          useYawConstraints: true,
          useZoomConstraints: true,
          zoomIn: 100,
          zoomOut: 2233.451310789853
        }, function (err) {
          console.log(err);
          console.log('cam constraints set');
        });
      });
    })

    document.getElementById('noSetCameraConstraints').addEventListener('click', function () {
      api.setEnableCameraConstraints(false, function () {
        console.log('cam constraints not enabled');
      });
    })

    document.getElementById('zoom').addEventListener('click', function () {
      api.setCameraLookAt([-5.211534864074402, -3.413438214244611, 0.3106502245956986], [0.0000036954879760742188, -0.40043526577064215, 1.1827186105846617], 2, function (err) {
        if (!err) {
          window.console.log('Camera moved');
        }
      });
    });

    document.getElementById('screenshot').addEventListener('click', function () {
      api.getScreenShot(800, 800, 'image/png', function (err, result) {
        var anchor = document.createElement('a');
        anchor.href = result;
        anchor.download = 'screenshot.png';
        anchor.innerHTML = '<img width="100" height="100" src=' + result + '>download';
        document.getElementById('controls').appendChild(anchor);
      });
    });

    var switched = false;
    var textureButton = document.getElementById('texture')
    textureButton.addEventListener('click', function () {
      if (switched) {
        textureButton.textContent = 'Update Texture';
        makeMyModelTextured(switched);
      } else {
        textureButton.textContent = 'Revert Texture';
        makeMyModelTextured(switched);
      }
      switched = !switched;
    });


    api.load(function () {
      window.console.log('Pre-loads the model before starting the viewer');
    });

    api.addEventListener('backgroundLoaded', function () {
      console.log('background loaded');
    });

    document.getElementById('background-image').addEventListener('click', function () {
      // use ?api_log=1 in editor to get those values
      // var list = ['ac8475e46ec94c169ab5774bb1287624', '78fa317e46024a5283765aa34df5e508', '3ef1bd11d3eb4b57a0b353e8f2e5fc3e'];
      // console.log(list);
      // var randBg = Math.floor(Math.random() * Math.floor(list.length));
      // api.setBackground({
      //   uid: list[randBg]
      // }, function () {
      //   console.log('asked');
      // });
      // console.log(list[randBg]);

      //   api.addTexture('http://127.0.0.1:5502/_DSC4201.jpg', function(err, textureUid) {
      //     if (!err) {
      //         window.console.log('New texture registered with UID', textureUid);

      //         api.getTextureList(function (err, textures) {
      //           if (!err) {
      //             window.console.log('textures 2: ', textures);
      //           }
      //         });
      //     }
      // });


    });
    document.getElementById('background-color').addEventListener('click', function () {
      var randBgR = Math.random();
      var randBgG = Math.random();
      var randBgB = Math.random();
      var randBgA = Math.random();
      var color = [randBgR, randBgG, randBgB, randBgA];
      api.setBackground({
        color: [randBgR, randBgG, randBgB, randBgA]
      }, function () {
        console.log('updated');
      });
      console.log(color);
    });
    document.getElementById('environment').addEventListener('click', function () {
      // use ?api_log=1 in editor to get those values
      // 17A37EF5-FD25-4351-92E3-A39BA39788C0
      var list = ['02751cd893a14f3986fb17a90245f64f', '2a016b232e444ef3a6ba323c51aa5063', '4024128cf8904b69946e891caac5f305'];
      console.log(list);
      var randEnv = Math.floor(Math.random() * Math.floor(list.length));
      api.setBackground({
        enable: 'environment'
      });
      api.setEnvironment({
        enabled: true,
        uid: list[randEnv]
      }, function () {
        console.log('asked');
      });
    });
    var pbmesh = document.getElementById('pb-mesh');
    var pbtexture = document.getElementById('pb-texture');
    api.addEventListener('modelLoadProgress', function (eventData) {
      var percent = Math.floor(eventData.progress * 100);
      // console.log('mesh Load Progress', percent);
      pbmesh.style.width = percent + '%';
    });
    api.addEventListener('textureLoadProgress', function (eventData) {
      var percent = Math.floor(eventData.progress * 100);
      // console.log('texture Load Progress', percent);
      pbtexture.style.width = percent + '%';
    });

    api.addEventListener("viewerready", function () {

      // api.getSceneGraph(function (err, result) {
      //       if (err) {
      //           console.log('-------Scene Graph--------------')
      //           console.log('Error getting nodes');
      //           return;
      //       }
      //       console.log(result);
      //       console.log("nodes indexed by names from scene node graph");
      //   });

      console.log("ready");


      api.addTexture(NewTextureURL, function (err, textureId) {
        // blackTextureUID = textureId;
        newTextureUID = textureId;
        if (!err) {
          // window.console.log('New texture registered with UID', textureUid);
          api.getTextureList(function (err, textures) {
            if (!err) {
              window.console.log('new listtextures: ', textures);
            }
          });
        }
      });


      api.getNodeMap(function (err, nodes) {
        if (!err) {
          for (var instanceID in nodes) {
            var node = nodes[instanceID];
            var name = node.name;
            if (!name) name = "noname_" + idxNodes++;
            myNodesByNameFromMap[name] = node;

          }
          console.log('nodes: ', nodes);
          //console.log("nodes indexed by names from flattened array");
          //console.log(myNodesByNameFromMap);


          //attempt to look for a 'RootNode' - this seems to be present for FBX uploaded models
          rootNodeTree = myNodesByNameFromMap["RootNode"];

          if (rootNodeTree === undefined) {
            //attempt to look for a 'root' - this seems to be present for OBJ or single object models
            rootNodeTree = myNodesByNameFromMap["root"];
          }

          if (rootNodeTree != undefined) {

            recurse(rootNodeTree, rootNodeTree.children.length, 0);
            //console.log(officialNodes);

            //Now we can build the tree for the UI
            generateTree();
          }

          var hideButtons = document.getElementsByClassName("Hide");
          //console.log('HIDE BUTTONS LENGTH: ' + hideButtons.length);
          for (let i = 0; i < hideButtons.length; i++) {
            hideButtons[i].addEventListener("click", function () {
              //api.hide(this.value);
              this.style.backgroundColor = "red";

              var childButtons = document
                .getElementById(this.value)
                .getElementsByClassName("Hide");
              // console.log(" Child Buttons: " + childButtons.length);

              if (childButtons.length == 0) {
                api.hide(this.value);
              }

              for (let j = 0; j < childButtons.length; j++) {
                hideBTN = document.getElementById(childButtons[j].id);
                //console.log(childButtons[i].id);
                hideBTN.style.backgroundColor = "red";
                api.hide(hideBTN.value);
              }
            });
          }

          var showButtons = document.getElementsByClassName("Show");
          //console.log('SHOW BUTTONS LENGTH: ' + showButtons.length);
          for (let k = 0; k < showButtons.length; k++) {
            showButtons[k].addEventListener("click", function () {
              api.show(this.value);
              var hideBTN = document.getElementById(
                this.id + "_" + this.name + "Hide"
              );
              hideBTN.style.backgroundColor = "green";

              var childButtons = document
                .getElementById(this.value)
                .getElementsByClassName("Show");
              //console.log(' Child Buttons: ' + childButtons.length);
              for (let l = 0; l < childButtons.length; l++) {
                api.show(childButtons[l].value);
                hideBTN = document.getElementById(childButtons[l].id + "_Hide");
                hideBTN.style.backgroundColor = "green";
              }
            });
          }
        }
      });

      document.getElementById('hide').addEventListener('click', function () {
        console.log('hide');
        // api.hide(3);
        api.hide(4);
        api.hide(5);
        api.hide(23);
        api.hide(24);
        api.hide(25);
      });

      document.getElementById('a0').addEventListener('click', function () {
        api.gotoAnnotation(0, {
          preventCameraAnimation: true,
          preventCameraMove: false
        });
      });


      api.getMaterialList(function (err, materials) {
        if (!err) {
          window.console.log('List materials:', materials);
          myMaterials = materials;
          for (var i = 0; i < myMaterials.length; i++) {
            var m = myMaterials[i];
            textures[m.name] = m.channels.AlbedoPBR.texture;
            console.log('Materials item: ', m.name, m);
          }
          renderDataToDOM(materials);
        }
      });
      api.getTextureList(function (err, textures) {
        if (!err) {
          window.console.log('List textures: ', textures);


          renderDataToDOMTextures(textures);
        }
      });

      var camPo
      var camTarget
      api.getCameraLookAt(function (err, camera) {
        // window.console.log(camera.position); // [x, y, z]
        // window.console.log(camera.target); // [x, y, z]
        camPo = camera.position
        camTarget = camera.target
      });


      // api.createAnnotation(
      //   [0.1, 1.86, 0.82],
      //   [0.12, 1.57, 0.51],
      //   // [0.1, 1.86, 0.82],
      //   // [0.12, 1.57, 0.51],
      //   camPo,
      //   camTarget,
      //   'mytitle2',
      //   'mytext2',
      //   function (err, index) {
      //     if (!err) {
      //       window.console.log('Created new annotatation', index + 1);
      //       window.console.log('camPo', camPo);
      //     } else {
      //       window.console.log('Created new annotatation err', err);
      //       window.console.log('camPo', camPo);
      //     }
      //   }
      // );

      // api.createAnnotationFromScenePosition(
      //   [0.12, -3.57, -0.51],
      //   camPo,
      //   camTarget,
      //   'mytitle1',
      //   'mytext1',
      //   function (err, index) {
      //     if (!err) {
      //       window.console.log('Created new annotatation', index + 1);
      //       window.console.log('camPo', camPo);
      //     } else {
      //       window.console.log('Created new annotatation err', err);
      //       window.console.log('camPo', camPo);
      //     }
      //   }
      // );

      // api.createAnnotationFromWorldPosition(
      //   [0.12, -3.57, -0.51],
      //   camPo,
      //   camTarget,
      //   'mytitle2',
      //   'mytext2',
      //   function (err, index) {
      //     if (!err) {
      //       window.console.log('Created new annotatation', index + 1);
      //     }
      //   }
      // );


      // api.getAnnotation(0, function (err, information) {
      //   if (!err) {
      //     window.console.log(information);
      //   }
      // });
      // api.updateAnnotation(2, {
      //   title: 'updatedTitle 1',
      //   content: 'updatedContent 1'
      // }, function (err, information) {
      //   if (!err) {
      //     window.console.log(information);
      //   }
      // });

      // api.updateAnnotation(3, {
      //   name: 'updatedTitle 2',
      //   title: 'updatedTitle 2',
      //   content: 'updatedContent 2'
      // }, function (err, information) {
      //   if (!err) {
      //     window.console.log(information);
      //   }
      // });


      api.getAnnotationList(function (err, annotations) {
        if (!err) {
          window.console.log('annotations', annotations);
        }
      });

      /*  
        document.getElementById('screenshot').addEventListener('click', function () {
           api.getScreenShot(800, 800, 'image/png', function (err, result) {
           if (!err) {
             var anchor = document.createElement('a');
             anchor.href = result;
             anchor.download = 'screenshot.png';
             anchor.innerHTML = '<img width="100" height="100" src=' + result + '>';
             document.getElementById('navTree').appendChild(anchor);
            }
          });
        });
        */

      /*
            document.getElementById('show').addEventListener('click', function () {
                api.show(id);
            });
            
            */
    });
  });
  // api.stop(function () {
  //   window.console.log('Viewer stopped');
  // });

};
client.init(uid, {
  success: success,
  error: error,
  autostart: 1,
  preload: 1,
  autospin: autoSpin,
  transparent: 1,
  // scrollwheel: 0,
  // ui_stop: 0,
  default: 1,
  ui_theme: 'dark',
  ui_settings: uiSettings
});
//////////////////////////////////
// GUI Code
//////////////////////////////////
function initGui() {
  var controls = document.getElementById("navTree");
  var buttonsText = "";
  buttonsText += '<button id="screenshot2">screenshot</button>';
  controls.innerHTML = buttonsText;
}
// initGui();

function generateTree() {
  //console.log("Total Node Count: " + officialNodes.length);

  var tree = unflatten(officialNodes);
  console.log('tree: ', tree);

  //Create the HTML UL elemenet of the objects
  var navTree = document.getElementById("navTree");
  navTree.appendChild(to_ul(tree, "myUL"));

  var toggler = document.getElementsByClassName("caret");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }
}

function unflatten(arr) {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.instanceID] = arrElem;
    mappedArr[arrElem.instanceID].children = [];
  }

  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.parentID) {
        mappedArr[mappedElem.parentID].children.push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

/**********************
  GENERATE HTML UL TREE
**********************/
function to_ul(branches, setID = "", setClass = "") {
  var outerul = document.createElement("ul");
  var lengthOfName = 25;
  // console.log("Branches: " + branches);
  // console.log("Branches: " + branches[0]);

  if (setID != "") {
    outerul.id = setID;
  }
  if (setClass != "") {
    outerul.className = setClass;
  }

  for (var i = 0, n = branches.length; i < n; i++) {
    var branch = branches[i];

    var li = document.createElement("li");
    // console.table("Branch : " + JSON.stringify(branch));
    // console.table("branch.name : " + branch.name);
    if (branch.name) {
      var text = branch.name.replace(/_/g, " ");

      // console.log("text: " + text);
      if (text.length > lengthOfName) {
        text = text.substring(0, lengthOfName);
        text += "...";
      }
      var textNode = document.createTextNode(text);

      if (branch.isParent) {
        var sp = document.createElement("span");
        sp.className = "caret caret-down";

        sp.appendChild(textNode);

        li.appendChild(sp);
        li.appendChild(createButton("Hide", branch.instanceID, branch.name));
        li.appendChild(createButton("Show", branch.instanceID, branch.name));
      } else {
        var sp2 = document.createElement("span");
        sp2.className = "caret_child";
        sp2.appendChild(textNode);
        li.appendChild(sp2);
        li.appendChild(createButton("Hide", branch.instanceID, branch.name));
        li.appendChild(createButton("Show", branch.instanceID, branch.name));
      }

      // console.log("branch.children: " + branch.children);
      // if (branch.children) {
      li.appendChild(to_ul(branch.children, branch.instanceID, "nested active"));
      // }

      outerul.appendChild(li);
    }
  }

  // console.log(outerul);
  // console.log(" - - - - --  - - - - - -- ");
  return outerul;
}

function renderImagesToDOM(imageData) {
  const imageList = document.getElementById("image-list");

  imageData.forEach(item => {
    const listItem = document.createElement("li");
    const image = document.createElement("img");
    image.src = item.url;
    image.width = item.width;
    image.height = item.height;
    listItem.appendChild(image);
    imageList.appendChild(listItem);
  });
}

function renderDataToDOM(data) {
  const dataList = document.getElementById("data-list");

  data.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${item.name}, ID: ${item.id}`;
    dataList.appendChild(listItem);
  });
}

function renderDataToDOMTextures(data) {
  const dataList = document.getElementById("data-textures");

  data.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${item.name}, ID: ${item.uid}`;
    // item.images.forEach(image => {
    //     const listItem = document.createElement("li");
    //     listItem.textContent = `Name: ${item.name}, ID: ${item.uid}`;

    //     dataList.appendChild(listItem);

    // });

    dataList.appendChild(listItem);
    item.images.forEach(item => {
      // const listItem = document.createElement("div");
      const image = document.createElement("img");
      image.src = item.url;
      image.width = item.width;
      image.height = item.height;
      listItem.appendChild(image);
      dataList.appendChild(listItem);
    });

  });
}



function createButton(btnType, instance, name) {
  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = btnType;

  if (btnType == "Hide") {
    btn.id = instance + "_" + name + "_" + btnType;
    btn.style.backgroundColor = "green";
  } else {
    btn.id = instance + "_" + name;
  }
  btn.value = instance;
  var btnText = document.createTextNode(btnType);
  btn.appendChild(btnText);

  return btn;
}

//////////////////////////////////
// GUI Code end
//////////////////////////////////

function recurse(nodeTree, childCount, theParentID) {
  if (typeof nodeTree != "undefined") {
    //Process the children of this node tree
    for (var i = 0; i < childCount; i++) {
      var node = {
        name: nodeTree.children[i].name,
        type: nodeTree.children[i].type,
        instanceID: nodeTree.children[i].instanceID,
        isParent: false,
        parentID: theParentID
      };

      if (node.type == "MatrixTransform") {
        //Determine if this node is a parent
        node.isParent = isParent(nodeTree.children[i].children);

        // console.log(
        //   "   " +
        //     node.name +
        //     "(Node Type:" +
        //     node.type +
        //     ")" +
        //     "(Instance ID: " +
        //     node.instanceID +
        //     ")" +
        //     "(Is Parent: " +
        //     node.isParent +
        //     ")" +
        //     "(Parent ID: " +
        //     node.parentID +
        //     ")" +
        //     " Child Count :" +
        //     nodeTree.children[i].children.length
        // );

        //Add this node to the complete node array list we are constructing
        officialNodes.push(node);

        recurse(
          nodeTree.children[i],
          nodeTree.children[i].children.length,
          nodeTree.children[i].instanceID
        );
      }
    }
  }
}

function isParent(children) {
  //Look through all the children to see if a "MatrixTransform" type exists...

  var result = false;

  for (var i = 0; i < children.length; i++) {
    if (children[i].type == "MatrixTransform") {
      result = true;
      // console.log("PARENT NODE DETECTED");
      break;
    } else {
      result = false;
    }
  }

  return result;
}