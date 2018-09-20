var openURL = function (val) {
    if (native)
    {
        var parameter = {'URL':val};
        native.openURLJS(parameter);
    }
}

var openApp = function (app_bundleid, app_url) {
    if (native)
    {
        var parameter = {'bundleId':app_bundleid, 'appURL':app_url};
        native.openAppJS(parameter);
    }
}

String.format = function() {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for ( var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}

var setLanguage = function(language) {
    $('.wrapper').children().each(function(){
        $(this).addClass(language);
    });

    $.getScript("localization/"+language+".lproj/LocalizationString.js", function(data, textStatus, jqxhr) {
        runLocalization();
    });
}

var runLocalization = function() {
    $("#title-content").html(ATLocalization.Product_Title);
    $("#description-content").html(ATLocalization.Product_Description);
    $("#feature-name-content-1").html(ATLocalization.Feature_1);
    $("#feature-name-content-2").html(ATLocalization.Feature_2);
    $("#feature-name-content-3").html(ATLocalization.Feature_3);
    $("#feature-description-content-1").html(ATLocalization.Feature_Description_1);
    $("#feature-description-content-2").html(ATLocalization.Feature_Description_2);
    $("#feature-description-content-3").html(ATLocalization.Feature_Description_3);
    $("#btn-purchase-title-content").html(ATLocalization.Button_Purchase);
    $("#btn-cancel-title-content").html(ATLocalization.Button_Cancel);
}

var initEvent = function() {
    $(".btn-close").click(function() {
        window.location.href="http://closewindow";
    });

    $(".btn-cancel").click(function() {
        window.location.href="http://closewindow";
    });
    
    $(".btn-purchase").click(function() {
        openApp('com.trendmicro.DrCleaner', 'macappstore://itunes.apple.com/app/id921458519?mt=12&at=1001ldFh&ct=DU.BuyCleaner.V1001');
    });
}

$(document).ready(function(){
//    setLanguage("en");
    initEvent();
});
