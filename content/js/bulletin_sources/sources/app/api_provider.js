/**
 * Created by JohnMak on 02/12/15.
 */

var api_provider = function(set_apiKey, waitTimeOut) {

    var __log = function(msg) {
        console.log('%c API PROVIDER: '+msg, 'color: #189f91');
    };

    var apiKey = set_apiKey;
    var domain = 'https://api.bubblesu.com/';

    this.getDataFromLocal = function() {
        var data = {};
        try {
            data = JSON.parse(localStorage.getItem("bubblesu.bulletin_board_data"));
            if (!data) {
                data = {};
                console.warn('Local storage is empty, reverting to the default data.');
            }
            else {
                console.warn('Successfuly restored from the local storage');
            }
        }
        catch (e) {
            data = {};
            console.warn('Local storage data also corrupted, reverting to the default data.');
        }
        return data;
    };

    this.load_board = function(success) {
        var self = this;
        //__log("Loading data from server...");
        var timedOut = false;
        $.ajax({
            url: domain+'bulletin_boards.json?APIKey='+apiKey,
            type: 'GET',
            contentType: false,
            success: function(res){
                if (timedOut) {
                    timedOut = false;
                    return;
                }
                //console.log(res);
                if (res.Status.OK) {
                    //__log("Loaded data from server.");

                    var data = {};
                    if (typeof res.Status.OK.UserBulletinBoard === 'undefined')
                        res.Status.OK.UserBulletinBoard = {json:"{}"};

                    try {
                        data = JSON.parse(res.Status.OK.UserBulletinBoard.json);
                    }
                    catch (e) {
                        console.warn('Received corrupted JSON data. Data has been lost. Restoring from the local storage');
                        data = self.getDataFromLocal();
                    }

                    success(data);
                }
            }
        });

        if (waitTimeOut) {
            setTimeout(function () {
                timedOut = true;
                console.warn('Haven\'t received server answer in timeout interval('+waitTimeOut+'ms)');
                success(self.getDataFromLocal());
            }, waitTimeOut);
        }
    };

    this.save_board = function(board_json) {
        //__log("Board has been sent to the server...");
        //__log(JSON.stringify(board_json));

        localStorage.setItem("bubblesu.bulletin_board_data", JSON.stringify(board_json));
        $.ajax({
            url: domain+'bulletin_boards.json?APIKey='+apiKey,
            data: JSON.stringify(board_json),
            dataType: 'text',
            crossDomain: true,
            contentType: 'text/plain',
            type: 'POST',
            success: function(res){
                //__log(res);
                res = JSON.parse(res);
                if (res.Status.OK) {
                    //__log('Board saved on the server.')
                }
            }
        });

    };
};


module.exports = api_provider;
