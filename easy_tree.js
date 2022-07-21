function EasyTree(tag, data, options) {
    if (typeof data === 'string' || data instanceof String) {
        data = JSON.parse(data);
    }

    if (typeof data != 'object' && !(data instanceof object)) {
        throw 'EasyTree cannot be built; valid data was not passed';
    }

    let base = tag;

    if (typeof tag === 'string' || tag instanceof String) {
        base = document.getElementById(tag);
    }

    if (base == null) {
        throw "A DOM element could not be found to attach the tree to."
    }

    let valueHandlers = {
        "leftClick": [],
        "rightClick": [],
        "hover": []
    };

    let objectHandlers = {
        "leftClick": [],
        "rightClick": [],
        "hover": []
    };

    let arrayHandlers = {
        "leftClick": [],
        "rightClick": [],
        "hover": []
    };

    function fireValueEvent(event) {
        // Call all of the functions assigned to the event for values
    };

    function fireObjectEvent(event) {
        // Call all of the functions assigned to the event for objects
    };

    function fireArrayEvent(event) {
        // Call all of the functions assigned to the event for arrays
    };

    function randomStrings() {
        return (Math.random() + 1).toString(36).substring(2);
    }

    function cleanKey(key) {
        let cleanedKey = key.replaceAll(" ", "_");

        return cleanedKey;
    }

    function buildList(key, nodeData, depth) {
        if (depth == null) {
            depth = 0;
        }

        let listElement = document.createElement('ul');
        listElement.id = cleanKey(key) + "-list-" + randomStrings();
        listElement.classList.add("EasyTreeList");
        listElement.setAttribute("depth", depth);

        for (valueIndex = 0; valueIndex < nodeData.length; valueIndex++) {
            var valueElement = document.createElement("li");
            valueElement.id = cleanKey(key) + "-item-" + valueIndex + "-" + randomStrings();
            valueElement.classList.add("EasyTreeListItem");
            valueElement.setAttribute("index", valueIndex);

            valueElement.appendChild(buildMarkup(cleanKey(key) + "-" + valueIndex, nodeData[valueIndex], depth + 1));
        }

        for (const value in nodeData) {
            var valueElement = document.createElement("li");
            valueElement.id =
        }
    };

    function buildObject(key, nodeData, depth) {
        if (depth == null) {
            depth = 0;
        }

        let objectElement = document.createElement('ul');
        objectElement.id = cleanKey(key) + "-object-" + randomStrings();
        objectElement.classList.add("EasyTreeObject");
        objectElement.setAttribute("depth", depth);

        for (const propertyKey in nodeData) {
            var propertyElement = document.createElement("li");
            propertyElement.id = cleanKey(propertyKey) + "-property-" + randomStrings();
            propertyElement.classList.add("EasyTreeProperty");

            var markup = buildMarkup(cleanKey(propertyKey), nodeData[propertyKey], depth + 1);
            propertyElement.appendChild(markup);
            objectElement.appendChild(propertyElement);
        }

        return objectElement;
    };

    function buildValue(key, nodeData, depth) {
        if (depth == null) {
            depth = 0;
        }

        let valueElement = document.createElement('span');
        valueElement.id = cleanKey(key) + "-value-" + randomStrings();
        valueElement.classList.add("EasyTreeValue");
        valueElement.textContent = nodeData;

        return valueElement;
    };

    function buildMarkup(key, nodeData, depth) {
        if (depth == null) {
            depth = 0;
        }
    };

    let treeID = "EasyTree_" + randomStrings();

    let markup = buildMarkup(treeID, data);

    base.appendChild(markup);

    return {
        addValueHandler: function(eventName, func) {

        },
        addObjectHandler: function(eventName, func) {

        },
        addArrayHandler: function(eventName, func) {

        }
    };
}