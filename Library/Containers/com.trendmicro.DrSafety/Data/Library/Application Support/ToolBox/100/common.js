const MSGTYPE = {
    kOpenAdCleaner: '0',
    kOpenAppDrUnarchiver: '1',
    kOpenAppDrCleaner: '2',
    kOpenApp: '3'
};

var sendMsgToSafety = function (msg) {
    if (window.webkit) {
        window.webkit.messageHandlers.WKWWebViewMsgHandler.postMessage(msg);
    }
};

var setLanguage = function (lang) {
    lang = lang.replace("#", "");
    switch (lang) {
        case 'zh-Hans':
            runLocalization(wordings_zh_hans);
            break;
        case 'zh-Hant':
            runLocalization(wordings_zh_hant);
            break;
        case 'de':
            runLocalization(wordings_de);
            break;
        case 'es':
            runLocalization(wordings_es);
            break;
        case 'fr':
            runLocalization(wordings_fr);
            break;
        case 'it':
            runLocalization(wordings_it);
            break;
        case 'ko':
            runLocalization(wordings_ko);
            break;
        case 'nl':
            runLocalization(wordings_nl);
            break;
        case 'en':
            runLocalization(wordings_en);
            break;
        default:
            runLocalization(wordings_en);
    }
};

var runLocalization = function (data) {
    $("#title-content").html(data.Product_Title);
    $("#description-content").text(data.Product_Description);
    $("#tool-name-content-1").text(data.Tool_Name_1);
    $("#tool-description-content-1").text(data.Tool_Description_1);
    $("#tool-name-content-2").html(data.Tool_Name_2);
    $("#tool-description-content-2").html(data.Tool_Description_2);
    $("#tool-name-content-3").html(data.Tool_Name_3);
    $("#tool-description-content-3").html(data.Tool_Description_3);
    $(".cleaner-btn").html(data.Button_Open);
    $(".tool-created-drcleaner").html(data.Tool_Created_Name);
};

var initEvent = function () {

    $("#btn-open-tool-1").click(function () {
        sendMsgToSafety({
            type: MSGTYPE.kOpenApp,
            bundles: ["com.trendmicro.DrUnzip"],
            storeURL: "macappstore://itunes.apple.com/app/id1127253508?mt=12&at=1001ldFh&ct=Safety.Toolbox.BuyUnzip"
        });
    });

    $("#btn-open-tool-2").click(function () {
        sendMsgToSafety({
            type: MSGTYPE.kOpenApp,
            bundles: ["com.trendmicro.DrCleanerProPlus", "com.trendmicro.DrCleaner"],
            storeURL: "macappstore://itunes.apple.com/app/id921458519?mt=12&at=1001ldFh&ct=Safety.Toolbox.BuyCleaner"
        });
    });

    $("#btn-open-tool-3").click(function () {
        sendMsgToSafety({
            type: MSGTYPE.kOpenApp,
            bundles: ["com.haowudev.openanyfiles"],
            storeURL: "macappstore://itunes.apple.com/app/id1250827715?mt=12&at=1001ldFh&ct=Safety.Toolbox.BuyDrFile"
        });
    });
};

$(document).ready(function () {
    setLanguage(window.location.hash);
    initEvent();
});
