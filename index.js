
        const products = [
            { id: 1, name_cn: "整鸡", name_en: "Whole Chicken", price: 20, unit: "bird", options: ["Fresh", "Frozen"], image: "../images/Whole Chicken.jpeg" },
            { id: 2, name_cn: "整鸡(无头、脚、内脏)", name_en: "Whole Chicken Super", price: 18, unit: "bird", image: "../images/Whole Chicken.jpeg" },
            { id: 3, name_cn: "菜园鸡", name_en: "Kampung Chicken", price: 22, unit: "bird", image: "../images/Whole Kampung Chicken.jpeg" },
            { id: 4, name_cn: "鸡三节翅", name_en: "Three Joint Wing", price: 20, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Three Joint Wing.jpeg" },
            { id: 5, name_cn: "鸡小腿", name_en: "Drummet", price: 25, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Drummet.jpeg" },
            { id: 6, name_cn: "鸡中翅", name_en: "Mid Joint Wing", price: 15, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Mid Joint Wing.jpeg" },
            { id: 7, name_cn: "鸡翅尖", name_en: "Wing Tip", price: 12, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Wing Tip.jpeg" },
            { id: 8, name_cn: "鸡下庄", name_en: "Saddle", price: 30, unit: "kg", image: "../images/Chicken Saddle.jpeg" },
            { id: 9, name_cn: "全鸡腿", name_en: "Whole Leg", price: 28, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Whole Leg.jpeg" },
            { id: 10, name_cn: "鸡腿", name_en: "Drumstick", price: 20, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Drumstick.jpeg" },
            { id: 11, name_cn: "鸡二度", name_en: "Thigh", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Thigh.jpeg" },
            { id: 12, name_cn: "鸡扒", name_en: "Chicken Chop", price: 15, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Chop (1).png" },
            { id: 13, name_cn: "去骨鸡腿", name_en: "Boneless Leg", price: 20, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Boneless Leg.jpeg" },
            { id: 14, name_cn: "去骨鸡二度", name_en: "Boneless Thigh", price: 15, unit: "kg", image: "../images/Chicken Boneless Thigh.jpeg" },
            { id: 15, name_cn: "去皮去骨鸡腿", name_en: "Skinless Boneless Leg", price: 15, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Skinless Boneless Leg.jpeg" },
            { id: 16, name_cn: "去皮去骨鸡二度", name_en: "Skinless Boneless Thigh", price: 15, unit: "kg", image: "../images/Chicken Skinless Boneless Thigh.jpeg" },
            { id: 17, name_cn: "鸡胸肉", name_en: "Breast", price: 10, unit: "kg", image: "../images/Chicken Breast.jpeg" },
            { id: 18, name_cn: "去骨鸡胸肉", name_en: "Boneless Breast", price: 5, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Boneless Breast.jpeg" },
            { id: 19, name_cn: "去皮去骨鸡胸肉", name_en: "Skinless Boneless Breast", price: 20, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Skinless Boneless Breast.jpeg" },
            { id: 20, name_cn: "去皮去骨鸡胸（无鸡柳）", name_en: "Skinless Boneless Breast Without Fillet", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Skinless Boneless Breast Without Fillet.jpeg" },
            { id: 21, name_cn: "鸡柳", name_en: "Chicken Fillet", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Fillet.jpeg" },
            { id: 22, name_cn: "鸡脚", name_en: "Chicken Feet", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Feet.jpeg" },
            { id: 23, name_cn: "鸡尾巴", name_en: "Chicken Tail", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Tail.jpeg" },
            { id: 24, name_cn: "鸡皮", name_en: "Chicken Skin", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Skin.jpeg" },
            { id: 25, name_cn: "鸡胗", name_en: "Chicken Gizzard", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Gizzard.jpeg" },
            { id: 26, name_cn: "鸡肝", name_en: "Chicken Liver", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Liver.jpeg" },
            { id: 27, name_cn: "鸡心", name_en: "Chicken Heart", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Heart.jpeg" },   
            { id: 28, name_cn: "鸡骨架", name_en: "Chicken Carcass", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Carcass.jpeg" },
            { id: 29, name_cn: "鸡胸软骨", name_en: "Chicken Breast Cartilage", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Breast Cartilage.jpeg" },
            { id: 30, name_cn: "鸡腿骨", name_en: "Leg Bone", price: 10, unit: "kg", options: ["Fresh", "Frozen"], image: "../images/Chicken Leg Bone.jpeg" },
            { id: 31, name_cn: "鸡膝软骨", name_en: "Chicken Knee Softbone", price: 10, unit: "kg", image: "../images/Chicken Knee Softbone.jpeg" }
        ];

        let cart = [];

        const menuDiv = document.getElementById("menu");

        products.forEach(product => {
            let div = document.createElement("div");
            div.className = "product";

            let optionSelect = "";
            if (product.options) {
                optionSelect = `
                    <label>选择类型 Select Type:</label>
                    <select id="option_${product.id}">
                        ${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
                    </select>
                `;
            }

            div.innerHTML = `
                <h3>${product.name_cn}<br>${product.name_en}</h3>
                <img src="${product.image}" alt="${product.name}" width="200" height="200">
                <p>价格 Price: RM${product.price}/${product.unit}</p>
                ${optionSelect}
                <input type="text" id="kg_${product.id}" placeholder="${product.unit}" inputmode="decimal" pattern="^[0-9]*\.?[0-9]+$">

                <br>    
                <button onclick="addToCart(${product.id})">加入购物车 Add to Cart</button>
            `;
            menuDiv.appendChild(div);
        });

        function addToCart(productId) {
            const kgInput = document.getElementById(`kg_${productId}`).value.trim();
        
            if (!kgInput || isNaN(kgInput) || parseFloat(kgInput) <= 0) {
                alert("请输入正确的数量（只允许数字）！\nPlease enter a valid quantity (numbers only)!");
                return;
            }
        
            const product = products.find(p => p.id === productId);
            const optionSelect = document.getElementById(`option_${productId}`);
            const selectedOption = optionSelect ? optionSelect.value : null;
            const itemInCart = cart.find(item => item.product.id === productId && item.option === selectedOption);
        
            if (itemInCart) {
                itemInCart.quantity += parseFloat(kgInput);
            } else {
                cart.push({
                    product,
                    quantity: parseFloat(kgInput),
                    option: selectedOption
                });
            }
        
            alert(`已将 ${product.name_cn} ${selectedOption ? '(' + selectedOption + ')' : ''} (${kgInput}${product.unit}) 加入购物车！\nAdded ${product.name_en} ${selectedOption ? '(' + selectedOption + ')' : ''} (${kgInput}${product.unit}) to cart!`);
            updateCart();
        }
        

    function toggleCart() {
        const cartPopup = document.getElementById("cartPopup");
        cartPopup.style.display = cartPopup.style.display === "flex" ? "none" : "flex";

        updateCart();
    }

    function updateCart() {
        const cartDiv = document.getElementById("cart");
        cartDiv.innerHTML = "";  

        if (cart.length === 0) {
            cartDiv.innerHTML = "购物车为空 \nYour cart is empty.";
            return;
        }

        let total = 0;
        cart.forEach((item, index) => {
            const itemTotal = item.product.price * item.quantity;
            const unit = item.product.unit;
            const optionText = item.option ? ` (${item.option})` : "";

            cartDiv.innerHTML += `
                <p>
                    ${item.product.name_cn}${optionText} - ${item.quantity}${unit} - RM${item.product.price}/${unit} - 小计 Subtotal: RM${itemTotal.toFixed(2)}
                    <br>
                    <input type="number" value="${item.quantity}" min="0" id="quantity_${item.product.id}_${index}" style="width: 60px;">
                    <button onclick="updateItemQuantity(${index})">更新数量 Edit</button>
                    <button onclick="removeFromCart(${index})">删除 Delete</button>
                </p>
            `;
            total += itemTotal;
        });

        cartDiv.innerHTML += `<strong>总价 Total: RM${total.toFixed(2)}</strong>`;
    }

    function updateItemQuantity(index) {
        const newQuantity = parseFloat(document.getElementById(`quantity_${cart[index].product.id}_${index}`).value);

        if (isNaN(newQuantity) || newQuantity <= 0) {
            alert("请输入正确的数量！\nPlease enter a valid quantity.");
            return;
        }

        cart[index].quantity = newQuantity;
        alert("商品数量已更新！\nItem quantity updated!");
        updateCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1); 
        alert("商品已从购物车中删除！\nItem removed from cart!");
        updateCart();
    }

    function placeOrder() {
        if (cart.length === 0) {
            alert("购物车为空，无法下单！\nYour cart is empty. Please add items before placing an order.");
            return;
        }

        const orderDetails = cart.map(item => {
            const unit = item.product.unit;
            const optionText = item.option ? ` (${item.option})` : "";
            const subtotal = (item.product.price * item.quantity).toFixed(2);

            return `${item.product.name_cn}${optionText} - ${item.quantity}${unit} - RM${subtotal}`;
        });

        const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2);

        const orderMessage = `订单详情 Order Details:\n\n${orderDetails.join("\n")}\n\n总价 Total: RM${totalAmount}`;
        const whatsappLink = `https://wa.me/60125419137?text=${encodeURIComponent(orderMessage)}`;

        window.location.href = whatsappLink;
    }
