const products = [
    // ==========================================
    // DANH MỤC: ĐIỆN THOẠI (tag: "phone") - id: 1 - 10
    // ==========================================
    { id: 1, name: "iPhone 15 Pro Max 256GB Chính Hãng", price: 29990000, oldPrice: 34990000, tag: "phone", img: "product/ip15prm.jpg" },
    { id: 3, name: "Xiaomi 14 Ultra Chính Hãng", price: 21490000, oldPrice: 24990000, tag: "phone", img: "product/xiaomi14ultra.jpg" },
    { id: 4, name: "Oppo Find X7 Ultra", price: 18990000, oldPrice: 21990000, tag: "phone", img: "product/oppofindx7ultra.jpg" },
    { id: 5, name: "iPhone 14 Pro 128GB", price: 22490000, oldPrice: 25990000, tag: "phone", img: "product/ip14pro.jpg" },
    { id: 6, name: "Realme GT5 Pro Gaming Edition", price: 12490000, oldPrice: 14490000, tag: "phone", img: "product/realmeGT5Pro.jpg" },
    { id: 7, name: "Google Pixel 8 Pro ", price: 17990000, oldPrice: 19990000, tag: "phone", img: "product/googlepixel8pro.jpg" },
    { id: 8, name: "Asus ROG Phone 8", price: 24990000, oldPrice: 27990000, tag: "phone", img: "product/asusrogphone8.jpg" },
    { id: 9, name: "Vivo X100 Pro", price: 19500000, oldPrice: 22000000, tag: "phone", img: "product/vivox100pro.jpg" },
    { id: 10, name: "iPhone 13 128GB", price: 13990000, oldPrice: 16990000, tag: "phone", img: "product/ip13.jpg" },

    // ==========================================
    // DANH MỤC: MÁY TÍNH BẢNG (tag: "tablet") - id: 11 - 20
    // ==========================================
    { id: 11, name: "iPad Pro M4 256GB", price: 28990000, oldPrice: 31990000, tag: "tablet", img: "product/ipadpro.jpg" },
    { id: 12, name: "Samsung Galaxy Tab S9 Ultra", price: 22990000, oldPrice: 26990000, tag: "tablet", img: "product/samsunggalaxypad.jpg" },
    { id: 13, name: "iPad Air 6 M2", price: 16490000, oldPrice: 18490000, tag: "tablet", img: "product/ipadair.jpg" },
    { id: 14, name: "Xiaomi Pad 6 Pro", price: 8490000, oldPrice: 9990000, tag: "tablet", img: "product/xiaomipad.jpg" },
    { id: 15, name: "iPad Gen 10 64GB", price: 10290000, oldPrice: 11990000, tag: "tablet", img: "product/ipadgen.jpg" },
    { id: 16, name: "Samsung Galaxy Tab A9 Plus", price: 5490000, oldPrice: 6490000, tag: "tablet", img: "product/samsunggalaxypadA9.jpg" },
    { id: 17, name: "iPad Mini 6 64GB", price: 12390000, oldPrice: 13990000, tag: "tablet", img: "product/ipadmini.jpg" },
    { id: 18, name: "Lenovo Xiaoxin Pad Pro 2024", price: 6990000, oldPrice: 7990000, tag: "tablet", img: "product/lenovoxiaoxinpad.jpg" },
    { id: 19, name: "Huawei MatePad Pro 11 inch", price: 13490000, oldPrice: 15490000, tag: "tablet", img: "product/huaweimatepad.jpg" },
    { id: 20, name: "Oppo Pad 2", price: 9990000, oldPrice: 11490000, tag: "tablet", img: "product/oppopad.jpg" },

    // ==========================================
    // DANH MỤC: LAPTOP (tag: "laptop") - id: 21 - 30
    // ==========================================
    { id: 21, name: "MacBook Air M3 13 inch 8GB/256GB", price: 27490000, oldPrice: 29990000, tag: "laptop", img: "product/macbookair.jpg" },
    { id: 22, name: "Laptop ASUS Zenbook 14 OLED", price: 24990000, oldPrice: 27990000, tag: "laptop", img: "product/asuszenbook.jpg" },
    { id: 23, name: "MacBook Pro M3 14 inch", price: 39990000, oldPrice: 44990000, tag: "laptop", img: "product/macbookpro.jpg" },
    { id: 24, name: "Laptop Dell XPS 13 Plus", price: 42500000, oldPrice: 49900000, tag: "laptop", img: "product/dellxps.jpg" },
    { id: 25, name: "Laptop HP Envy x360 ", price: 19990000, oldPrice: 22990000, tag: "laptop", img: "product/hpenvy.jpg" },
    { id: 26, name: "Laptop Lenovo Yoga Slim 7 Pro", price: 21890000, oldPrice: 24500000, tag: "laptop", img: "product/lenovoYoga.jpg" },
    { id: 27, name: "Laptop Gaming Acer Nitro V", price: 18490000, oldPrice: 20990000, tag: "laptop", img: "product/acerNitro.jpg" },
    { id: 28, name: "Laptop ASUS ROG Strix G16", price: 31990000, oldPrice: 35990000, tag: "laptop", img: "product/asusROG.jpg" },
    { id: 29, name: "Laptop MSI Modern 14", price: 11490000, oldPrice: 13290000, tag: "laptop", img: "product/msiModern.jpg" },
    { id: 30, name: "Laptop LG Gram 14", price: 26500000, oldPrice: 30500000, tag: "laptop", img: "product/lgGram.jpg" },

    // ==========================================
    // DANH MỤC: SMART WATCH (tag: "watch") - id: 31 - 40
    // ==========================================
    { id: 31, name: "Apple Watch Ultra 2 GPS + Cellular", price: 21990000, oldPrice: 23990000, tag: "watch", img: "product/appleWatch.jpg" },
    { id: 32, name: "Samsung Galaxy Watch6 Classic", price: 7490000, oldPrice: 8990000, tag: "watch", img: "product/samsungWatch.jpg" },
    { id: 33, name: "Apple Watch Series 9 Nhôm", price: 9690000, oldPrice: 11290000, tag: "watch", img: "product/appleWatchSeries9.jpg" },
    { id: 34, name: "Đồng Hồ Thể Thao Garmin Fenix 7 Pro", price: 18490000, oldPrice: 21490000, tag: "watch", img: "product/garminFenix.jpg" },
    { id: 35, name: "Xiaomi Watch S3", price: 3190000, oldPrice: 3990000, tag: "watch", img: "product/xiaomiWatch.jpg" },
    { id: 36, name: "Huawei Watch GT 4", price: 4990000, oldPrice: 5990000, tag: "watch", img: "product/huaweiWatch.jpg" },
    { id: 37, name: "Apple Watch SE 2023", price: 5990000, oldPrice: 6990000, tag: "watch", img: "product/appleWatchSE.jpg" },
    { id: 38, name: "Samsung Galaxy Watch FE", price: 4490000, oldPrice: 4990000, tag: "watch", img: "product/samsungWatchFE.jpg" },
    { id: 39, name: "Đồng Hồ Thông Minh Amazfit GTR 4", price: 3790000, oldPrice: 4490000, tag: "watch", img: "product/amazfitGTR.jpg" },
    { id: 40, name: "Garmin Forerunner 265", price: 11690000, oldPrice: 12490000, tag: "watch", img: "product/garminForerunner.jpg" },

    // ==========================================
    // DANH MỤC: PHỤ KIỆN (tag: "accessory") - id: 41 - 50
    // ==========================================
    { id: 41, name: "Apple AirPods Pro 2", price: 5990000, oldPrice: 6990000, tag: "accessory", img: "product/airpodsPro.jpg" },
    { id: 42, name: "Củ sạc Anker Prime", price: 2390000, oldPrice: 2990000, tag: "accessory", img: "product/ankerPrime.jpg" },
    { id: 43, name: "Tai nghe Sony WH-1000XM5", price: 6790000, oldPrice: 8490000, tag: "accessory", img: "product/sonyWh.jpg" },
    { id: 44, name: "Củ Sạc Nhanh Baseus GaN5 Pro 65W", price: 450000, oldPrice: 590000, tag: "accessory", img: "product/baseusGan.jpg" },
    { id: 45, name: "Chuột Không Dây Logitech MX Master 3S", price: 2350000, oldPrice: 2690000, tag: "accessory", img: "product/logitechMx.jpg" },
    { id: 46, name: "Bàn Phím Cơ NuPhy Air75 V2", price: 2990000, oldPrice: 3490000, tag: "accessory", img: "product/nuphyAir75.jpg" },
    { id: 47, name: "Tai nghe Marshall Minor IV", price: 3290000, oldPrice: 3790000, tag: "accessory", img: "product/marshallMinor.jpg" },
    { id: 48, name: "Cáp Sạc Nhanh C To C Apple 240W", price: 890000, oldPrice: 990000, tag: "accessory", img: "product/appleCable.jpg" },
    { id: 49, name: "Loa Bluetooth JBL Charge 5", price: 3490000, oldPrice: 3990000, tag: "accessory", img: "product/jblCharge.jpg" },
    { id: 50, name: "Gimbal Chống Rung DJI Osmo Mobile 6", price: 3190000, oldPrice: 3690000, tag: "accessory", img: "product/djiGimbal.jpg" },

    // ==========================================
    // DANH MỤC: SẢN PHẨM HOT TRANG CHỦ - id: 51 - 60
    // ==========================================
    { id: 51, name: "iPhone 15 Pro Max 256GB Chính Hãng", price: 29990000, oldPrice: 34990000, tag: "phone", img: "product/ip15prm.jpg" },
    { id: 52, name: "Xiaomi 14 Ultra Chính Hãng", price: 21490000, oldPrice: 24990000, tag: "phone", img: "product/xiaomi14ultra.jpg" },
    { id: 53, name: "iPad Pro M4 256GB", price: 28990000, oldPrice: 31990000, tag: "tablet", img: "product/ipadpro.jpg" },
    { id: 54, name: "Samsung Galaxy Tab S9 Ultra", price: 22990000, oldPrice: 26990000, tag: "tablet", img: "product/samsunggalaxypad.jpg" },
    { id: 55, name: "MacBook Air M3 13 inch 8GB/256GB", price: 27490000, oldPrice: 29990000, tag: "laptop", img: "product/macbookair.jpg" },
    { id: 56, name: "Laptop ASUS Zenbook 14 OLED", price: 24990000, oldPrice: 27990000, tag: "laptop", img: "product/asuszenbook.jpg" },
    { id: 57, name: "Apple Watch Ultra 2 GPS + Cellular", price: 21990000, oldPrice: 23990000, tag: "watch", img: "product/appleWatch.jpg" },
    { id: 58, name: "Samsung Galaxy Watch6 Classic", price: 7490000, oldPrice: 8990000, tag: "watch", img: "product/samsungWatch.jpg" },
   
];

// Khởi tạo giỏ hàng từ LocalStorage nếu có
let cart = JSON.parse(localStorage.getItem('phoneCart')) || [];

// 2. Hàm đổ dữ liệu sản phẩm lên giao diện (Đã sửa thuật toán tự động bù đường dẫn ảnh)
function renderProducts(category = 'all', isHomePage = false) {
    const gridId = isHomePage ? 'featured-products' : 'all-products';
    const gridContainer = document.getElementById(gridId);
    
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    // KHỐI LOGIC THAY ĐỔI: Lọc chuẩn sản phẩm theo yêu cầu
    let filtered;
    if (isHomePage) {
        // Nếu ở Trang chủ: Chỉ bốc các sản phẩm có ID từ 51 đến 60
        filtered = products.filter(p => p.id >= 51 && p.id <= 60);
    } else {
        // Nếu ở Trang sản phẩm: Chỉ hiển thị các sản phẩm chính gốc từ ID 1 đến 50
        const mainProducts = products.filter(p => p.id >= 1 && p.id <= 50);
        filtered = category === 'all' ? mainProducts : mainProducts.filter(p => p.tag === category);
    }

    filtered.forEach(p => {
        const detailLink = isHomePage ? 'html/chi-tiet.html' : 'chi-tiet.html';
        
        // GIẢI PHÁP ĐƯỜNG DẪN ẢNH BẤT TỬ: Tự nhận diện folder để thêm hoặc không thêm "../"
        const isSubFolder = window.location.pathname.includes('/html/');
        const imgPath = isSubFolder ? `../assets/Image/${p.img}` : `assets/Image/${p.img}`;
        
        let priceHtml = `<p class="price">${p.price.toLocaleString('vi-VN')} đ</p>`;
        let discountBadgeHtml = '';

        if (p.oldPrice && p.oldPrice > p.price) {
            const discountPercent = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
            priceHtml = `
                <p class="price">
                    <span class="current-price">${p.price.toLocaleString('vi-VN')} đ</span>
                    <span class="old-price">${p.oldPrice.toLocaleString('vi-VN')} đ</span>
                </p>
            `;
            discountBadgeHtml = `<span class="discount-badge">-${discountPercent}%</span>`;
        }
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.cursor = 'pointer';
        
        productCard.addEventListener('click', function() {
            localStorage.setItem('selectedProductId', p.id); 
            window.location.href = detailLink; 
        });

        productCard.innerHTML = `
            <div class="product-img-container">
                <img src="${imgPath}" alt="${p.name}">
                ${discountBadgeHtml}
            </div>
            <h3>${p.name}</h3>
            ${priceHtml}
            <div class="product-actions">
                <span class="btn-detail">Xem chi tiết</span>
                <button class="btn-add-cart" id="btn-add-${p.id}">Thêm</button>
            </div>
        `;

        gridContainer.appendChild(productCard);

        const addToCartBtn = document.getElementById(`btn-add-${p.id}`);
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function(event) {
                event.stopPropagation(); 
                addToCart(p.id);
            });
        }
    });
}

// 3. Hàm đổi Tab lọc danh mục 
function filterCategory(category) {
    const isHomePage = document.getElementById('featured-products') !== null;

    if (isHomePage) {
        sessionStorage.setItem('selectedCategory', category);
        window.location.href = 'html/san-pham.html';
        return; 
    }

    const tabs = document.querySelectorAll('.category-tabs .tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const activeTab = Array.from(tabs).find(tab => tab.getAttribute('onclick').includes(`'${category}'`));
    if (activeTab) activeTab.classList.add('active');
    
    const titleObj = document.getElementById('current-category-title');
    if (titleObj) {
        switch(category) {
            case 'all': titleObj.innerText = "Tất cả sản phẩm"; break;
            case 'phone': titleObj.innerText = "Điện thoại"; break;
            case 'tablet': titleObj.innerText = "Tablet"; break;
            case 'laptop': titleObj.innerText = "Laptop"; break;
            case 'watch': titleObj.innerText = "Smart Watch"; break;
            case 'accessory': titleObj.innerText = "Phụ kiện"; break;
        }
    }

    renderProducts(category, false);
}

// 4. Tính năng Thêm vào giỏ hàng
function addToCart(productId) {
    const targetProduct = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...targetProduct, quantity: 1 });
    }

    localStorage.setItem('phoneCart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
    showToast("Đã thêm sản phẩm vào giỏ hàng thành công!");
}

// Hàm tạo thông báo tự động biến mất (Toast)
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 5. Cập nhật số lượng hiển thị trên Menu
function updateCartCount() {
    const countSpan = document.getElementById('cart-count');
    if (countSpan) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countSpan.innerText = totalItems;
    }
}

// 6. Hiển thị thông tin chi tiết giỏ hàng 
function displayCart() {
    const cartListContainer = document.getElementById('cart-items-list');
    const totalSpan = document.getElementById('cart-total');
    const totalItemsSpan = document.getElementById('cart-total-items');

    if (!cartListContainer) return;

    if (totalItemsSpan) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        totalItemsSpan.innerText = `${totalItems} sản phẩm`;
    }

    if (cart.length === 0) {
        cartListContainer.innerHTML = `
            <div class="empty-cart-state">
                <p>Giỏ hàng đang trống.</p>
                <p style="font-size: 0.85rem; color: #999;">Hãy chọn các sản phẩm chất lượng phía bên trái!</p>
            </div>`;
        if (totalSpan) totalSpan.innerText = '0 đ';
        return;
    }

    cartListContainer.innerHTML = '';
    let grandTotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;

        const isSubFolder = window.location.pathname.includes('/html/');
        const imgPath = isSubFolder ? `../assets/Image/${item.img}` : `assets/Image/${item.img}`;

        const itemHtml = `
            <div class="cart-item">
                <img src="${imgPath}" alt="${item.name}">
                <div class="item-details">
                    <h5>${item.name}</h5>
                    <p class="item-price">${item.price.toLocaleString('vi-VN')} đ</p>
                </div>
                <div class="item-quantity-controls">
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>
                <button class="btn-remove" onclick="removeFromCart(${index})">❌</button>
            </div>
        `;
        cartListContainer.innerHTML += itemHtml;
    });

    if (totalSpan) totalSpan.innerText = grandTotal.toLocaleString('vi-VN') + ' đ';
}

function changeQuantity(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem('phoneCart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('phoneCart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

// 7. Tính năng Xác nhận thanh toán
function processCheckout(event) {
    event.preventDefault();

    if (cart.length === 0) {
        showToast("Giỏ hàng của bạn đang trống, không thể thanh toán!");
        return;
    }

    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const address = document.getElementById('customer-address').value;
    const payment = document.getElementById('payment-method').value;

    alert(`Đặt hàng thành công!\n\nCảm ơn bạn ${name}.\nĐơn hàng sẽ được giao đến: ${address}.\nPhương thức: ${payment}.\n\nChúng tôi sẽ liên hệ bạn qua số điện thoại ${phone} để xác nhận đơn.`);
    
    cart = [];
    localStorage.removeItem('phoneCart');
    updateCartCount();
    displayCart();
    document.getElementById('checkout-form').reset();
}

// 8. HÀM XỬ LÝ TÌM KIẾM SẢN PHẨM
function executeSearch(keyword) {
    if (!keyword.trim()) {
        alert("Vui lòng nhập từ khóa tìm kiếm!");
        return;
    }

    const isHome = document.getElementById('featured-products') !== null;
    const gridId = isHome ? 'featured-products' : 'all-products';
    const gridContainer = document.getElementById(gridId);
    
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    const matchedProducts = products.filter(p => 
        p.name.toLowerCase().includes(keyword.toLowerCase())
    );

    if (matchedProducts.length === 0) {
        gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 30px; color: #757575;">Không tìm thấy sản phẩm nào phù hợp với từ khóa "${keyword}".</p>`;
        return;
    }

    matchedProducts.forEach(p => {
        const detailLink = isHome ? 'html/chi-tiet.html' : 'chi-tiet.html';
        const isSubFolder = window.location.pathname.includes('/html/');
        const imgPath = isSubFolder ? `../assets/Image/${p.img}` : `assets/Image/${p.img}`;
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.cursor = 'pointer';
        
        productCard.addEventListener('click', function() {
            localStorage.setItem('selectedProductId', p.id);
            window.location.href = detailLink;
        });

        productCard.innerHTML = `
            <img src="${imgPath}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">${p.price.toLocaleString('vi-VN')} đ</p>
            <div class="product-actions">
                <span class="btn-detail">Xem chi tiết</span>
                <button class="btn-add-cart" id="search-add-${p.id}">Thêm</button>
            </div>
        `;

        gridContainer.appendChild(productCard);

        const addToCartBtn = document.getElementById(`search-add-${p.id}`);
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function(event) {
                event.stopPropagation();
                addToCart(p.id);
            });
        }
    });

    gridContainer.scrollIntoView({ behavior: 'smooth' });
}

function triggerSearch() {
    const input = document.getElementById('search-input');
    executeSearch(input.value);
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        executeSearch(event.target.value);
    }
}