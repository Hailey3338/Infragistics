
$(function () {
    var data = $("#user");
    var uSourceUrl = data.attr("data-user");
    $("#user").igGrid({
        columns: [
            {
                headerText: "Id",
                key: "Id",
                dataType: "number",
                hidden: true
            },
            {
                headerText: "User Name",
                key: "UserName",
                dataType: "string"
            },
            {
                headerText: "Email",
                key: "Email",
                dataType: "string"

            },
            {
                headerText: "Added Date",
                key: "AddedDate",
                dataType: "any"
            }
        ],
        width: '100%',
        dataSource: uSourceUrl
    });
});
    