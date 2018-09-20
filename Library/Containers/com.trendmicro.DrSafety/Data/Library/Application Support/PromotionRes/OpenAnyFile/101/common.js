var openURL = function (val) {
    var parameter = {'Type':'100','URL':val};
    window.webkit.messageHandlers.native.postMessage(parameter);

    // if (native)
    // {
    //     var parameter = {'URL':val};
    //     native.openURLJS(parameter);
    // }
};

var openApp = function (app_bundleid, app_url) {
    var parameter = {'Type':'101','bundleId':app_bundleid, 'appURL':app_url};
    window.webkit.messageHandlers.native.postMessage(parameter);
    
    // if (native)
    // {
    //     var parameter = {'bundleId':app_bundleid, 'appURL':app_url};
    //     native.openAppJS(parameter);
    // }
};

String.format = function() {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for ( var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
};

var setLanguage = function(language) {

    switch (language) {
        case 'zh-Hans':
            runLocalization(window.ATLocalization_zh_Hans);
            break;
        case 'zh-Hant':
            runLocalization(window.ATLocalization_zh_Hant);
            break;
        case 'de':
            runLocalization(window.ATLocalization_de);
            break;
        case 'es':
            runLocalization(window.ATLocalization_es);
            break;
        case 'fr':
            runLocalization(window.ATLocalization_fr);
            break;
        case 'it':
            runLocalization(window.ATLocalization_it);
            break;
        case 'ko':
            runLocalization(window.ATLocalization_ko);
            break;
        case 'nl':
            runLocalization(window.ATLocalization_nl);
            break;
        case 'en':
            runLocalization(window.ATLocalization_en);
            break;
        default:
            runLocalization(window.ATLocalization_em);
    }
    // $('.wrapper').children().each(function(){
    //     $(this).addClass(language);
    // });

    // $.getScript("localization/"+language+".lproj/LocalizationString.js", function(data, textStatus, jqxhr) {
    //     runLocalization();
    // });
};

var runLocalization = function(data) {
    var unsafePercentage = String.format(data.Product_Description_1, 
                            '<span class="unsafe-percentage-colorfont">53%</span>');

    $("#title-content").html(data.Product_Title);
    $("#description-content-1").html(unsafePercentage);
    $("#description-content-2").html(data.Product_Description_2);
    $("#btn-cancel-title-content").html(data.Button_Cancel);
    $("#btn-open-title-content").html(data.Button_Open);
};

var initEvent = function() {
    $(".btn-cancel").click(function() {
        window.location.href="http://closewindow?appName=com.haowudev.openanyfiles";
    });

    $(".btn-open").click(function() {
        openApp('com.haowudev.openanyfiles', 'macappstore://itunes.apple.com/app/id1250827715?mt=12&at=1001ldFh&ct=Safety.openanyfiles.V1000');
    });
};

$(document).ready(function(){
    //setLanguage("zh-Hans");
    initEvent();
});