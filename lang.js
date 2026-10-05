const translations = {
    ar: {
        // عام / شريط العلوي
        "techSupport": "دعم فني متخصص",
        "welcomeUser": "مرحباً بك في حسابك الشخصي",
        "backToStore": "عودة للمتجر",
        
        // القائمة الجانبية لحساب المستخدم
        "myAccount": "معلومات حسابي",
        "orders": "طلباتي",
        "coupons": "كوبوناتي",
        "returns": "طلبات الاسترجاع",
        "logout": "تسجيل الخروج",

        // أنواع العملاء والحقول الإضافية
        "customerTypeLabel": "نوع العميل",
        "normalCustomer": "عميل عادي",
        "studentCustomer": "طالب طب أسنان",
        "clinicCustomer": "عيادة",
        "labCustomer": "مخبر أسنان",
        "extraFieldDefaultLabel": "الحقل المطلوب",
        "studentIdLabel": "رقم الطالب الجامعي *",
        "taxOrLicenseLabel": "الرقم الضريبي أو الترخيص *",

        // صفحة إنشاء الحساب (register.html)
        "registerPageTitle": "DENTA STORE - إنشاء حساب جديد",
        "registerTitle": "إنشاء حساب جديد",
        "fullNameLabel": "الاسم الكامل",
        "fullNamePlaceholder": "أدخل اسمك الكامل",
        "emailLabel": "البريد الإلكتروني",
        "emailPlaceholder": "example@email.com",
        "passwordLabel": "كلمة المرور",
        "passwordPlaceholder": "********",
        "registerSubmitBtn": "تسجيل حساب جديد",
        "hasAccountText": "لديك حساب بالفعل؟",
        "loginLink": "تسجيل الدخول",
        "emailExistsAlert": "هذا البريد الإلكتروني مسجل مسبقاً!",
        "registerSuccessAlert": "تم إنشاء الحساب بنجاح!",

        // صفحة الحساب الشخصي (account.html)
        "accountPageTitle": "DENTA STORE - حسابي الشخصي",
        "accountInfoTitle": "معلومات الحساب الشخصي",
        "defaultUserName": "اسم المستخدم",
        "ordersHistoryTitle": "سجل الطلبات السابقة",
        "noOrdersText": "لا توجد طلبات سابقة حتى الآن.",
        "availableCouponsTitle": "الكوبونات المتاحة لك",
        "couponDesc": "خصم 10% على جميع مستلزمات طب الأسنان.",
        "returnProductTitle": "طلب استرجاع منتج",
        "returnNote": "ملاحظة هامة: يُسمح بالاسترجاع خلال",
        "returnDays": "3 أيام",
        "returnNoteEnd": "فقط من تاريخ فاتورة الشراء.",
        "invoiceNumLabel": "رقم الفاتورة أو الطلب *",
        "invoicePlaceholder": "مثال: #1024",
        "invoiceDateLabel": "تاريخ فاتورة الشراء *",
        "policyWarningText": "عذراً، لقد تجاوزت المدة المسموحة للاسترجاع (3 أيام).",
        "returnNotesLabel": "تفاصيل وملاحظات الاسترجاع *",
        "returnNotesPlaceholder": "اكتب سبب الاسترجاع...",
        "uploadImageLabel": "إرفاق صورة المنتج *",
        "submitReturnBtn": "إرسال طلب الاسترجاع",
        "returnSuccessAlert": "تم إرسال طلب الاسترجاع بنجاح، سيتم مراجعته من قبل الإدارة خلال 24 ساعة.",
        "logoutAlert": "تم تسجيل الخروج بنجاح",
        "orderStatusProcessing": "قيد التنفيذ",
        "tableOrderNo": "رقم الطلب",
        "tableDate": "التاريخ",
        "tableTotal": "المبلغ",
        "tableStatus": "الحالة",
        "currencyUnit": "ليرة",

        // --- New Products Page & Modals Translations ---
        "newProductsPageTitle": "DENTA STORE - جديد المنتجات",
        "originalQuality": "جودة أصلية 100%",
        "wishlistText": "المفضلة",
        "cartText": "السلة",
        "accountText": "حسابي",
        "allDepartments": "كل الأقسام",
        "navHome": "الرئيسية",
        "navBrands": "الشركات",
        "navOffers": "العروض",
        "navBestSellers": "الأكثر مبيعاً",
        "navNewProducts": "جديد المنتجات",
        "navAbout": "من نحن",
        "navContact": "تواصل معنا",
        "newProductsHeader": "جديد المنتجات المضافة",
        "backToHome": "العودة للرئيسية",
        "aboutModalTitle": "من نحن",
        "aboutModalDesc": "شركة رائدة في توفير مواد ومستلزمات طب الأسنان، معتمدة رسمياً من وزارة الصحة التركية. يقع مقرنا الرئيسي في إسطنبول، ولدينا شبكة فروع واسعة تمتد في أغلب دول العالم لنكون دائماً الأقرب إليكم ونساند نجاحكم الطبي.",
        "closeBtn": "إغلاق",
        "contactTitle": "تواصل معنا",
        "contactDesc": "يسعدنا تواصلكم معنا عبر الوسائل التالية:",
        "whatsappText": "واتساب",

        // --- Best Sellers Page Translations ---
        "bestSellersPageTitle": "DENTA STORE - الأكثر مبيعاً",
        "bestSellersHeader": "المنتجات الأكثر مبيعاً",
        "noBestProducts": "عذراً، لا توجد منتجات في قائمة الأكثر مبيعاً حالياً.",
        
        "offersPageTitle": "DENTA STORE - العروض",
        "offersHeader": "عروض وتخفيضات المتجر",
        "noOffersProducts": "عذراً، لا توجد عروض أو تخفيضات متاحة حالياً.",

        "brandsPageTitle": "DENTA STORE - الشركات",
        "brandsHeader": "شركات الأجهزة والمستلزمات الطبية",
        "noBrandsFound": "عذراً، لا توجد شركات مضافة حالياً.",

        "wishlistPageTitle": "DENTA STORE - المفضلة",
        "wishlistBreadcrumb": "المفضلة",
        "wishlistMainTitle": "قائمة المفضلة",
        "emptyWishlistText": "قائمة المفضلة لديك فارغة حالياً!",
        "browseProductsBtn": "تصفح المنتجات الآن",

        "maintenancePageTitle": "DENTA STORE - الصيانة وقطع الغيار",
        "maintenanceBreadcrumb": "الصيانة وقطع الغيار",
        "maintenanceHeroTitle": "الصيانة وقطع الغيار",
        "maintenanceHeroDesc": "أجهزة وقطع غيار أصلية لضمان استمرار العمل في عيادتك ومخبرك بكفاءة عالية.",
        "browseCategoriesHeading": "تصفح التصنيفات",
        "searchPlaceholder": "ابحث عن قطعة غيار، جهاز أو خدمة...",

        "labsPageTitle": "DENTA STORE - مستلزمات المخابر",
        "labsBreadcrumb": "مستلزمات المخابر",
        "labsHeroTitle": "مستلزمات المخابر",
        "labsHeroDesc": "كل ما تحتاجه لتجهيز المخابر بدقة وعناية - منتجات أصلية من أفضل العلامات التجارية.",
        "labsSearchPlaceholder": "ابحث عن منتج، شركة أو تصنيف..."
    },
    tr: {
        // Genel / Üst Çubuk
        "techSupport": "Özel Teknik Destek",
        "welcomeUser": "Kişisel hesabınıza hoş geldiniz",
        "backToStore": "Mağazaya Dön",
        
        // Hesap Yan Menüsü
        "myAccount": "Hesap Bilgilerim",
        "orders": "Siparişlerim",
        "coupons": "Kuponlarım",
        "returns": "İade Talepleri",
        "logout": "Çıkış Yap",

        // Müşteri Tipleri ve Ek Alanlar
        "customerTypeLabel": "Müşteri Tipi",
        "normalCustomer": "Normal Müşteri",
        "studentCustomer": "Diş Hekimliği Öğrencisi",
        "clinicCustomer": "Klinik",
        "labCustomer": "Diş Laboratuvarı",
        "extraFieldDefaultLabel": "Gerekli Alan",
        "studentIdLabel": "Öğrenci Numarası *",
        "taxOrLicenseLabel": "Vergi Numarası veya Lisans *",

        // Kayıt Ol Sayfası (register.html)
        "registerPageTitle": "DENTA STORE - Yeni Hesap Oluştur",
        "registerTitle": "Yeni Hesap Oluştur",
        "fullNameLabel": "Ad Soyad",
        "fullNamePlaceholder": "Adınızı ve soyadınızı girin",
        "emailLabel": "E-posta Adresi",
        "emailPlaceholder": "example@email.com",
        "passwordLabel": "Şifre",
        "passwordPlaceholder": "********",
        "registerSubmitBtn": "Yeni Hesap Kaydet",
        "hasAccountText": "Zaten hesabınız var mı?",
        "loginLink": "Giriş Yap",
        "emailExistsAlert": "Bu e-posta adresi zaten kayıtlı!",
        "registerSuccessAlert": "Hesap başarıyla oluşturuldu!",

        // Hesap Bilgileri Sayfası (account.html)
        "accountPageTitle": "DENTA STORE - Kişisel Hesabım",
        "accountInfoTitle": "Kişisel Hesap Bilgileri",
        "defaultUserName": "Kullanıcı Adı",
        "ordersHistoryTitle": "Geçmiş Siparişler Geçmişi",
        "noOrdersText": "Henüz geçmiş sipariş bulunmuyor.",
        "availableCouponsTitle": "Size Özel Kuponlar",
        "couponDesc": "Tüm diş hekimliği malzemelerinde %10 indirim.",
        "returnProductTitle": "Ürün İade Talebi",
        "returnNote": "Önemli Not: İade işlemi, satın alma fatura tarihinden itibaren sadece",
        "returnDays": "3 gün",
        "returnNoteEnd": "içerisinde yapılabilir.",
        "invoiceNumLabel": "Fatura veya Sipariş Numarası *",
        "invoicePlaceholder": "Örnek: #1024",
        "invoiceDateLabel": "Satın Alma Fatura Tarihi *",
        "policyWarningText": "Üzgünüm, izin verilen iade süresini (3 gün) aştınız.",
        "returnNotesLabel": "İade Detayları ve Notları *",
        "returnNotesPlaceholder": "İade sebebini yazın...",
        "uploadImageLabel": "Ürün Fotoğrafını Ekleyin *",
        "submitReturnBtn": "İade Talebini Gönder",
        "returnSuccessAlert": "İade talebiniz başarıyla gönderildi, 24 saat içinde yönetim tarafından incelenecektir.",
        "logoutAlert": "Başarıyla çıkış yapıldı",
        "orderStatusProcessing": "İşleniyor",
        "tableOrderNo": "Sipariş No",
        "tableDate": "Tarih",
        "tableTotal": "Tutar",
        "tableStatus": "Durum",
        "currencyUnit": "TL",

        // --- New Products Page & Modals Translations ---
        "newProductsPageTitle": "DENTA STORE - Yeni Ürünler",
        "originalQuality": "%100 Orijinal Kalite",
        "wishlistText": "Favoriler",
        "cartText": "Sepet",
        "accountText": "Hesabım",
        "allDepartments": "Tüm Kategoriler",
        "navHome": "Ana Sayfa",
        "navBrands": "Markalar",
        "navOffers": "Kampanyalar",
        "navBestSellers": "Çok Satanlar",
        "navNewProducts": "Yeni Ürünler",
        "navAbout": "Hakkımızda",
        "navContact": "İletişim",
        "newProductsHeader": "Eklenen Yeni Ürünler",
        "backToHome": "Ana Sayfaya Dön",
        "aboutModalTitle": "Hakkımızda",
        "aboutModalDesc": "Diş hekimliği malzeme ve ekipmanları tedariğinde lider, Türkiye Sağlık Bakanlığı resmi onaylı bir şirketiz. Merkezimiz İstanbul'da olup, tıbbi başarınızı desteklemek ve size her zaman en yakın olmak için dünyanın çoğu ülkesine uzanan geniş bir şube ağımız bulunmaktadır.",
        "closeBtn": "Kapat",
        "contactTitle": "İletişim",
        "contactDesc": "Bizimle aşağıdaki kanallardan iletişime geçebilirsiniz:",
        "whatsappText": "WhatsApp",

        // --- Best Sellers Page Translations ---
        "bestSellersPageTitle": "DENTA STORE - Çok Satanlar",
        "bestSellersHeader": "Çok Satan Ürünler",
        "noBestProducts": "Üzgünüm, şu anda çok satan ürün bulunmuyor.",
        
        "offersPageTitle": "DENTA STORE - İndirimler",
        "offersHeader": "Mağaza Teklifleri ve İndirimleri",
        "noOffersProducts": "Üzgünüm, şu anda mevcut teklif veya indirim bulunmuyor.",

        "brandsPageTitle": "DENTA STORE - Firmalar",
        "brandsHeader": "Tıbbi Cihaz ve Malzeme Firmaları",
        "noBrandsFound": "Üzgünüm, şu anda eklenmiş firma bulunmuyor.",

        "wishlistPageTitle": "DENTA STORE - Favoriler",
        "wishlistBreadcrumb": "Favoriler",
        "wishlistMainTitle": "Favori Listesi",
        "emptyWishlistText": "Favori listeniz şu anda boş!",
        "browseProductsBtn": "Şimdi Ürünleri İncele",

        "maintenancePageTitle": "DENTA STORE - Bakım ve Yedek Parça",
        "maintenanceBreadcrumb": "Bakım ve Yedek Parça",
        "maintenanceHeroTitle": "Bakım ve Yedek Parça",
        "maintenanceHeroDesc": "Klinik ve laboratuvarınızda kesintisiz çalışma sağlamak için orijinal cihazlar ve yedek parçalar.",
        "browseCategoriesHeading": "Kategorilere Göz At",
        "searchPlaceholder": "Yedek parça, cihaz veya hizmet arayın...",

        "labsPageTitle": "DENTA STORE - Laboratuvar Malzemeleri",
        "labsBreadcrumb": "Laboratuvar Malzemeleri",
        "labsHeroTitle": "Laboratuvar Malzemeleri",
        "labsHeroDesc": "Laboratuvarınızı hassasiyet ve özenle donatmak için ihtiyacınız olan her şey - en iyi markalardan orijinal ürünler.",
        "labsSearchPlaceholder": "Ürün, marka veya kategori ara..."
    }
};

// الدالة المسؤولة عن تطبيق الترجمة على العناصر
function applyTranslations(lang) {
    // 1. ترجمة العناصر التي تحتوي على data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // 2. ترجمة حقول الـ Placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // 3. ضبط اتجاه الصفحة ولغتها (RTL للعربية / LTR للتركية)
    const htmlTag = document.documentElement;
    if (lang === 'tr') {
        htmlTag.setAttribute('lang', 'tr');
        htmlTag.setAttribute('dir', 'ltr');
    } else {
        htmlTag.setAttribute('lang', 'ar');
        htmlTag.setAttribute('dir', 'rtl');
    }

    // 4. مطابقة قائمة اختيار اللغة في الصفحة
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = lang;
    }
}

// دالة تغيير اللغة الموحدة
function changeLanguage(lang) {
    localStorage.setItem('dentaLang', lang);
    applyTranslations(lang);
    location.reload(); // إعادة تحميل الصفحة لضمان تطبيق الترجمة على كل المكونات
}

// تطبيق الترجمة فور تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('dentaLang') || 'ar';
    applyTranslations(savedLang);
});

// مزامنة التغيير بين النوافذ المفتوحة
window.addEventListener('storage', function(event) {
    if (event.key === 'dentaLang') {
        location.reload();
    }
});


function loadContactSettingsToAdmin() {
    document.getElementById('whatsappPrimary').value = localStorage.getItem('store_wa_primary') || '+90 539 369 4740';
    document.getElementById('whatsappSecondary').value = localStorage.getItem('store_wa_secondary') || '';
    document.getElementById('supportEmail').value = localStorage.getItem('store_email') || 'dentastore00@gmail.com';
}

function saveContactSettings() {
    const waPrimary = document.getElementById('whatsappPrimary').value;
    const waSecondary = document.getElementById('whatsappSecondary').value;
    const email = document.getElementById('supportEmail').value;

    localStorage.setItem('store_wa_primary', waPrimary);
    localStorage.setItem('store_wa_secondary', waSecondary);
    localStorage.setItem('store_email', email);

    alert('تم حفظ إعدادات التواصل بنجاح وتحديثها في المتجر!');
}


document.addEventListener("DOMContentLoaded", () => {
    const primaryWa = localStorage.getItem('store_wa_primary') || '+90 539 369 4740';
    const supportEmail = localStorage.getItem('store_email') || 'dentastore00@gmail.com';

    // تحديث رابط ونصوص الواتساب
    const waLink = document.getElementById('displayWhatsappLink');
    const waText = document.getElementById('displayWhatsappText');
    if (waLink) {
        waLink.href = `https://wa.me/${primaryWa.replace(/\s+/g, '')}`;
    }
    if (waText) {
        waText.innerHTML = `${primaryWa} (<span data-i18n="whatsappText">واتساب</span>)`;
    }

    // تحديث البريد الإلكتروني
    const emailLink = document.getElementById('displayEmailLink');
    const emailText = document.getElementById('displayEmailText');
    if (emailLink) {
        emailLink.href = `mailto:${supportEmail}`;
    }
    if (emailText) {
        emailText.innerText = supportEmail;
    }
});


function saveContactSettings() {
    const waPrimary = document.getElementById('whatsappPrimary').value;
    const email = document.getElementById('supportEmail').value;

    localStorage.setItem('store_wa_primary', waPrimary);
    localStorage.setItem('store_email', email);

    alert('تم حفظ البيانات بنجاح!');
}