$(document).ready(function () {
  // Replace 'your-api-endpoint' with the actual API endpoint
  var apiEndpoint = './xl750_transalp_2023/accessories.json?v=12';

  // Make API call using jQuery
  $.ajax({
    url: apiEndpoint,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      // Render the data into HTML
      renderAccessoryPacks(data.categories);
    },
    error: function (error) {
      console.error('Error fetching data from the API:', error);
    }
  });

  // Function to render accessory packs
  function renderAccessoryPacks(categories) {
    var accessoryPacksContainer = $('#accessoryPacks');

    // Loop through each category
    categories.forEach(function (category, index) {
      let active = index === 0 ? 'active' : '';
      if (category.accessories && category.accessories.length > 0) {
        var categoryHTML = `<button id="list-${index}" 
        class="control-tab ${active}">${category.iconName} (<span class="count"></span>)
       
        </button>`;

        // Append category HTML to the container
        accessoryPacksContainer.append(categoryHTML);
      }
    });
    categories.forEach(function (category, index) {
      let active = index === 0 ? 'active' : '';
      if (category.accessories && category.accessories.length > 0) {
        // Create HTML for category
        // var categoryHTML = '<h2>' + category.featuredName + '</h2>';
        var categoryHTML = '<div data-id="list-' + index + '" class="item ' + active + '">';
        categoryHTML += '<ul>';

        // Loop through accessories in the category
        category.accessories.forEach(function (accessory) {
          if (!accessory.hideFromAccessoryList) {


            // Create HTML for each accessory
            var accessoryHTML = '<li>';
            accessoryHTML += '<h6>' + accessory.name + '</h6>';
            // accessoryHTML += '<p>' + accessory.description + '</p>';
            accessoryHTML += '<p>Price: $' + accessory.price + '</p>';
            accessoryHTML += '<img src="' + accessory.thumbnailUrl + '" alt="' + accessory.name + '">';
            accessoryHTML += `<button data-part="${accessory.partNumber}" class="control-node chakra-text css-xwtcp3"><span class="text">Add</span>
          <span class="incompatibleAccessories hidden">${accessory.incompatibleAccessories}</span>
          <span class="requiredAccessories hidden">${accessory.requiredAccessories}</span>
          <span class="bundledAccessories hidden">${accessory.bundledAccessories}</span>
          <span class="incompatibleVariants hidden">${accessory.incompatibleVariants}</span>
          <span class="compatibleColours hidden">${accessory.compatibleColours}</span>

          </button>`;
            accessoryHTML += '</li>';

            // Append accessory HTML to category HTML
            categoryHTML += accessoryHTML;
          }
        });

        categoryHTML += '</ul></div>';

        // Append category HTML to the container
        accessoryPacksContainer.append(categoryHTML);
      }
    });
    // [data-id="' + id + '"]
    $('.control-tab').each(function (index, element) {
      let id = $(element).attr('id');
      let count = $('[data-id="' + id + '"]').find('li').length;
      $(element).find('.count').text(count);
    })


    $('.control-node').on('click', function (e) {
      let part = $(this).data('part');
      console.log('part number:', part);
      console.log('window.xl750_transalp2023:', window.xl750_transalp2023.logic[part]);
      let bundledAccessories = $(this).find('.bundledAccessories').text();
      let requiredAccessories = $(this).find('.requiredAccessories').text();
      console.log('bundledAccessories:', bundledAccessories);
      console.log('requiredAccessories:', requiredAccessories);

      if (window.xl750_transalp2023.logic[part] || bundledAccessories.length || requiredAccessories.length) {
        if ($(this).hasClass('added')) {
          $(this).removeClass('added');
          $(this).find('.text').text('Add');
          callPart(part, 'hide')

          const valuesArray = bundledAccessories.split(',');
          valuesArray.forEach(value => {
            console.log('value', value);
            callPart(value, 'hide')
          });
          const valuesArray2 = requiredAccessories.split(',');
          valuesArray2.forEach(value => {
            console.log('value', value);
            callPart(value, 'hide')
          });


        } else {
          $(this).addClass('added');
          $(this).find('.text').text('Remove');
          callPart(part, 'show')
          const valuesArray = bundledAccessories.split(',');
          valuesArray.forEach(value => {
            console.log('value', value);
            callPart(value, 'show')
          });
          const valuesArray2 = requiredAccessories.split(',');
          valuesArray2.forEach(value => {
            console.log('value', value);
            callPart(value, 'show')
          });
        }
      }

      // incompatible accessories



      // required Accessories

      // bundled Accessories
      // incompatible Variants
      // compatible Colours      

    })

    $('.control-tab').on('click', function (e) {
      var id = $(this).attr('id');
      if (!$(this).hasClass('active')) {
        $('.control-tab').removeClass('active');
        $(this).addClass('active');
        $('.item').removeClass('active');
        $('[data-id="' + id + '"]').addClass('active');
      }

    })

  }

  function callPart(part, action) {
    if (window.xl750_transalp2023.logic[part]) {

      let mergedActionLists = {};
      const firstItemValue = Object.values(window.xl750_transalp2023.logic[part].action_lists["on"])[0];
      console.log('firstItemValue:', firstItemValue);
      if (firstItemValue === 'on' || firstItemValue === 'off') {
        console.log('lay gian tiep')

        // Lặp qua các phụ kiện trong trạng thái hiện tại
        for (const accessory in window.xl750_transalp2023.logic[part].action_lists.on) {
          // Kiểm tra trạng thái "on" hoặc "off"
          const status = window.xl750_transalp2023.logic[part].action_lists.on[accessory];

          // Kiểm tra xem phụ kiện có tồn tại trong thông tin phụ kiện không
          if (window.xl750_transalp2023.logic.hasOwnProperty(accessory)) {
            // Lấy thông tin action_lists dựa trên trạng thái
            const actionLists = window.xl750_transalp2023.logic[accessory].action_lists[status];

            // Merge actionLists vào đối tượng kết quả
            Object.assign(mergedActionLists, actionLists);
          }
        }
      } else {
        console.log('lay truc tiep')
        mergedActionLists = window.xl750_transalp2023.logic[part].action_lists.on;
      }
      console.log('mergedActionLists:', mergedActionLists);
      for (const key in mergedActionLists) {

        if (key.includes('t_paint_')) {
          console.log('key:', key);



        } else {
          const instanceID = Object.values(window.nodes).find((item) => item.name === key).instanceID;
          if (instanceID) {
            console.log(`${key}: ${instanceID}`);
            if (action === 'show') {
              window.globalApi.show(instanceID);
            } else {
              window.globalApi.hide(instanceID);
            }
          }
        }

      }
    }
  }

  function callMaterial(part) {
    if (window.xl750_transalp2023.logic[part]) {

      let mergedActionLists = {};
      const firstItemValue = Object.values(window.xl750_transalp2023.logic[part].action_lists["on"])[0];
      console.log('firstItemValue:', firstItemValue);
      if (firstItemValue === 'on' || firstItemValue === 'off') {
        console.log('lay gian tiep')

        // Lặp qua các phụ kiện trong trạng thái hiện tại
        for (const accessory in window.xl750_transalp2023.logic[part].action_lists.on) {
          // Kiểm tra trạng thái "on" hoặc "off"
          const status = window.xl750_transalp2023.logic[part].action_lists.on[accessory];

          // Kiểm tra xem phụ kiện có tồn tại trong thông tin phụ kiện không
          if (window.xl750_transalp2023.logic.hasOwnProperty(accessory)) {
            // Lấy thông tin action_lists dựa trên trạng thái
            const actionLists = window.xl750_transalp2023.logic[accessory].action_lists[status];

            // Merge actionLists vào đối tượng kết quả
            Object.assign(mergedActionLists, actionLists);
          }
        }
      } else {
        console.log('lay truc tiep')
        mergedActionLists = window.xl750_transalp2023.logic[part].action_lists.on;
      }
      console.log('mergedActionLists:', mergedActionLists);

      $.each(mergedActionLists, function (key, value) {
        console.log("Key: " + key + ", Value: " + value);
        // m.channels.AlbedoPBR.texture = false;
        // m.channels.AlbedoPBR.color = [0.2232279573168085, 0.1878207723006778, 0.04518620438567554];
        // console.log('window.ma: ', window.ma)
        function getObjectByName(name) {
          for (var i = 0; i < window.ma.length; i++) {
            if (window.ma[i].name === name) {
              return window.ma[i];
            }
          }
          return null; // Trả về null nếu không tìm thấy đối tượng có name tương ứng
        }

        var desiredObject = getObjectByName(value);
        if (desiredObject) {
          console.log("Color: ", desiredObject); // Hiển thị object có name là "t_paint_VI"
          console.log("Color: ", desiredObject.channels.AlbedoPBR.color); // Hiển thị object có name là "t_paint_VI"

          for (var i = 0; i < myMaterials.length; i++) {
            var m = window.ma[i];
            if(m.name===key){
            console.log('m:', m.name);
            m.channels.AlbedoPBR.texture = false;
            m.channels.AlbedoPBR.color = desiredObject.channels.AlbedoPBR.color;
            window.globalApi.setMaterial(m);
            console.log('----------------------------------')
            }
          }
        }

      });
    }
  }


  var apiEndpoint2 = './xl750_transalp.json?v=12';

  // Make API call using jQuery
  $.ajax({
    url: apiEndpoint2,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      // Render the data into HTML
      // console.log('data:', data.variants[0].colours);
      renderAccessoryPacks2(data.variants[0].colours);

    },
    error: function (error) {
      console.error('Error fetching data from the API:', error);
    }
  });

  function renderAccessoryPacks2(categories) {
    var accessoryPacksContainer = $('#accessoryPacks2');

    // Loop through each category
    categories.forEach(function (category, index) {
      let active = index === 0 ? 'active' : '';
      //if (category.accessories && category.accessories.length > 0) {
      console.log('category:', category);
      var categoryHTML = `<button data-part="${category.id}" data-name-part="${category.idPart}" id="list-color-${index}" 
        class="control-color ${active}" style="background-color: ${category.color}"><span>Choose your color: ${category.name}</span>
       
        </button>`;

      // Append category HTML to the container
      accessoryPacksContainer.append(categoryHTML);
      // }
    });

    $('.control-color').on('click', function (e) {
      let part = $(this).data('name-part');
      console.log('part number:', part);
      console.log('window.xl750_transalp2023:', window.xl750_transalp2023.logic[part]);
      // let bundledAccessories = $(this).find('.bundledAccessories').text();
      // let requiredAccessories = $(this).find('.requiredAccessories').text();
      // console.log('bundledAccessories:', bundledAccessories);
      // console.log('requiredAccessories:', requiredAccessories);

      //if (window.xl750_transalp2023.logic[part]) {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        // $(this).find('.text').text('Add');
        callMaterial(part)


      } else {
        $('.control-color').removeClass('active');
        $(this).addClass('active');
        // $(this).find('.text').text('Remove');
        callMaterial(part)
      }
      // }
    })
  }
});