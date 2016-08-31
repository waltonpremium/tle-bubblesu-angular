PART I: Bulletin Board Application Gulp Builder Instruction 
===========

## Install dependencies

1. Open terminal and go to the bulletin source folder
2. Write and execute 
                     
         $ npm install
         
## Run builder

1. Open terminal and go to the bulletin source folder
2. Write and execute 
                     
         $ gulp

#### Once builder is started it will watch for the file changing and automatically rebuild app.

## Set up builder

In the gulpfile.js you will see parameters definition and the builder scripts.
 
Via these definitions you can easily customize building paths, files names and expand including files.

### Publish files names ###
* **fname_build_script**        output script file name `bulletin_board.min.js`
* **fname_build_styles**        output styles file name `bulletin_board.min.css`

### Publish paths ###
* **publish_source**            output script folder `../`
* **publish_styles**            output script folder `../../../theme/TleBs3/css/`


PART II: Bulletin Application Documentation
===========

Bulletin app is written with ractive framework. Main bulletin app object is representation of ractive component.

## Init application

1. Include in your project "fname_build_script" and "fname_build_styles" (see builder instruction) `bulletin_board.min.js` and `bulletin_board.min.css`
2. Past placeholder in html template 
        
        <div id="bulletin_placeholder"></div>
3. After the scripts file is loaded run script:

        var bulletin = new window.BulletinApp();


## Initialization parameters

Application have several reqiured and not required parameters:

### Callbacks ###
All callbacks content `this` is app itself.
* **onRender**: callback that is running on app initialized 
* **onBoardLoad**: callback that is running on board data has been loaded 
* **onBoardSave**: is running on board data has been saved
* **onHeart**: function(sticker) {} is running on heart sticker action: heart
* **onShare**: function(sticker) {} is running on heart sticker action: share
* **onPlay**: function(sticker) {} is running on heart sticker action: play
* **onRemove**: function(sticker) {} is running on heart sticker action: remove. Return false to disable removing 

### Parameters ###
* **serverWaitTimeOut**: Wait time for server response otherwise work with local storage (type 0 to infinite time)
* **apiKey**: global app api key *REQUIRED FOR PROPER WORK WITH SEVER
* **init_heart_list** – init heart sticker list (will be automatically added if not presented on the board)

### Init data set ###
* **content** – basic ractive object content data.
    * scale_factor – scale coefficient default is 10
    * is_alphabet_shown – init alphabet right panel state (hide or shown)
    * achieves – achieves list
    * week_sticker – week sticker specifying (see week sticker json format)
            
* **init_board_data** – initial data for new user or for lost data case
    * border_color – border colour (`yellow`, `green`, `violet`, `blue`, `orange`) 
    * cur_board – number of current board
    * boards – boards list with stickers
    
    
        
            var bulletin = new window.BulletinApp({
                apiKey: 'c4b035a227d972d992105b13e651ed73',
                content: {
                    scale_factor: 10,
                    is_alphabet_shown: true,
                    achieves: [
                        {
                            title: "Bubbles U - Chills Out",
                            img_url: "http://cdn.bubblesu.com/images/bulletine/achieve_icon.jpg",
                            medals:[
                                {
                                    title: "Antarctica",
                                    achieved: true
                                },
                                {
                                    title: "Arctic Circle",
                                    achieved: true
                                }
                            ],
                            trophy_achieved: false
                        }
                    ],
                    week_sticker: {
                        opt: 'lion_on_skate',
                        w: 44,
                        h: 72,
                        img_url: 'http://cdn.bubblesu.com/images/bulletine/week_sticker.png'
                    }
                },
                onLoad: function() {
                },
                init_heart_list: [{
                    type: 'app',
                    opt: 'game',
                    heart_id: 'xywsuw',
                    img_url:'http://cdn.bubblesu.com/images/bulletine/clipped_game.jpg'
                }],
                serverWaitTimeOut: 0,
                onHeart: function(heart_id){
                    console.log('On Heart ', heart_id);
                },
                onPlay: function(heart_id){
                    console.log('On Play ', heart_id);
                },
                onShare: function(heart_id){
                    console.log('On Share ', heart_id);
                },
                onRemove: function(heart_id){
                    console.log('On Remove ', heart_id);
                    return true;
                }
            });
    
    
    
Bulletin app object methods
---------------

### Board operating ###
* **createSticker(data, board_i)** - create sticker with specific sticker data in specific or current board
    * data - data in sticker json format. Required only type and opt properties in sticker json.       
    * board_i - *optional* zero-ordered number for board number. If not presented creating in current board.
    
            bulletin.createSticker({
                type:   'app', 
                opt:    'music', 
                img_url:'http://cdn.bubblesu.com/images/bulletine/clipped_game.jpg'
            });
            
* **updateSticker(uid, data, new_board, not_found_callback)** - updating sticker data if exist. Moving to another board.
    * uid - REQUIRED  unique id to search sticker
    * data - data in sticker json format. Only rewrite and extend.
    * new_board - *optional* number of new board for moving sticker. Type -1 to skip.
    * not_found_callback - *optional* callback for not existing sticker.
    
            bulletin.updateSticker('jsduw', 
                {x:120, y: 160, z:142}, 
                3, 
                function(){  console.log('updated'); }
            );
            
* **removeSticker(uid, not_found_callback)r** - remove sticker by uid
    * uid - REQUIRED  unique id to search sticker
    * not_found_callback - *optional* callback for not existing sticker.
            bulletin.removeSticker('jsduw', function(){  console.log('removed'); } );
            
* **load_board(callback)** - init load board algorithm (see load board algorithm)
    * callback - function that will run on finish
            bulletin.load_board(function(){  console.log('board data loaded'); } );
            
* **save_board()** - init save algorithm (see save board algorithm)
            bulletin.save_board();
            
* **reset_board_data()** - reset all boards data to init value, that could be set on bulletin app object init.
            bulletin.reset_board_data();
* **rescale()** - init rescale mechanism (see rescale mechanism)
            bulletin.rescale();
* **next_board()** - turn to the next board or create if not exist (only if current board is not empty)
            bulletin.next_board();
* **prev_board()** - turn to the previous board or create if not exist (only if current board is not empty)
            bulletin.prev_board();

### data operating ###
* **get(var_path)** - get variable from application data structure
* **set(var_path, var_value)** – set variable to the application data structure
            bulletin.get('achieves');
            bulletin.set('week_sticker', {
                opt: 'lion_on_skate',
                w: 44,
                h: 72,
                img_url: 'http://cdn.bubblesu.com/images/bulletine/week_sticker.png'
            })


------
PART III: Data objects definition
================

Via get and set methods you can access application data, but you still need knowledge about data structure to type right variables paths.

Bulletin board app data structure
----------------

You can type

                bulletin.get('');
            
to get all application data:
            
                ApplicationDATA {
                    scale_factor: 10,
                    is_alphabet_shown: true,
                    achieves: [
                        {
                            title: "Bubbles U - Chills Out",
                            img_url: "http://cdn.bubblesu.com/images/bulletine/achieve_icon.jpg",
                            medals:[
                                {
                                    title: "Antarctica",
                                    achieved: true
                                },
                                {
                                    title: "Arctic Circle",
                                    achieved: true
                                }
                            ],
                            trophy_achieved: false
                        }
                    ],
                    week_sticker: {
                        opt: 'lion_on_skate',
                        w: 44,
                        h: 72,
                        img_url: 'http://cdn.bubblesu.com/images/bulletine/week_sticker.png'
                    }
                    data: {
                        {  
                           "border_color":"blue",
                           "cur_board":1,
                           "boards":[  
                              {  
                                 "stickers":[  
                                    {  
                                       "uid":"GpM",
                                       "z":9,
                                       "type":"app",
                                       "opt":"game",
                                       "heart_id":"xysu",
                                       "img_url":"http://cdn.bubblesu.com/images/bulletine/clipped_game.jpg",
                                       "x":28.64656075419,
                                       "y":16.18263134058,
                                       "angle":10
                                    }
                                 ]
                              },
                              {  
                                 "stickers":[  
                                    {  
                                       "uid":"u69",
                                       "z":21,
                                       "type":"letter",
                                       "opt":"d",
                                       "x":64.084322625698,
                                       "y":30.117753623188,
                                       "angle":-3
                                    },
                                    {  
                                       "uid":"1qM",
                                       "z":29,
                                       "type":"deco",
                                       "opt":"music",
                                       "x":70.806044161677,
                                       "y":18.495145631068,
                                       "angle":7
                                    }
                                 ]
                              },
                              {  
                                 "stickers":[  
                        
                                 ]
                              }
                           ],
                           "version":"0.21"
                        }
                    }
                }
Note that it looks very similar to content init parameter, basically content parameter is init data for the application.
And init_board_data for 'data' in application data

Boards data structure
----------------
Run the follow:
            
            bulletin.get('data');
            
Output will be boards data object:


            data: {
                {  
                   "border_color":"blue",
                   "cur_board":1,
                   "boards":[  
                      {  
                         "stickers":[  
                            {  
                               "uid":"GpM",
                               "z":9,
                               "type":"app",
                               "opt":"game",
                               "heart_id":"xysu",
                               "img_url":"http://cdn.bubblesu.com/images/bulletine/clipped_game.jpg",
                               "x":28.64656075419,
                               "y":16.18263134058,
                               "angle":10
                            }
                         ]
                      },
                      {  
                         "stickers":[  
                            {  
                               "uid":"u69",
                               "z":21,
                               "type":"letter",
                               "opt":"d",
                               "x":64.084322625698,
                               "y":30.117753623188,
                               "angle":-3
                            },
                            {  
                               "uid":"1qM",
                               "z":29,
                               "type":"deco",
                               "opt":"music",
                               "x":70.806044161677,
                               "y":18.495145631068,
                               "angle":7
                            }
                         ]
                      },
                      {  
                         "stickers":[  
                
                         ]
                      }
                   ],
                   "version":"0.21"
                }
            }
            
Whole boards data will be stored on the server and local storage.
            

Stickers types and data structure
----------------
There are common properties for all stickers:

        {
            uid: 'Dc3',         // unique ID
            z: 29,              // z-index of element
            type: "deco",       // sticker type
            opt: "music",       // sticker type subinformation (depend on sticker type)
            x: 70.806044161677, // coordinate x in percents
            y: 18.495145631068, // coordinate y in percents
            angle: 7            // rotating angle (randomly selected each time on move)
        }
                
There several stickers types with additional properties:
1.  **deco**    - decorative stickers from the rotating wheel (star, moon, etc)
    
        {
            opt: 'star'     // kind of deco element
        }
                
2.  **letter**  - letters from the right panel
    
        {
            opt: 'c'     // letter
        }
      
3.  **week**    - sticker of the day
    
        {
            opt: "lion_on_skate"     // human readable week sticker name
            img_url:  "http://cdn.bubblesu.com/images/bulletine/clipped_game.jpg" // image url
            w: 44 // width dimension for the sticker notice that image should be at least 2x larger 
            h: 72 // height dimension for the sticker notice that image should be at least 2x larger
             
        }
      
4.  **trophy**  - sticker for the achieved trophies
        
        {
            opt: '',     // not used
            label: "Bubbles U - Chills Out" // trophy's label will be shown under the trophy
        }
      
5.  **app**     - stickers for liked items (movie, game, painting, etc)
    
        {
            opt: 'star',     // kind of deco element
            heart_id: 'hB3', // unique heart ID
            img_url:  "http://cdn.bubblesu.com/images/bulletine/clipped_game.jpg" // image url will be automatically covered 152x114
        }
          
    
   