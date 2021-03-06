function(args) {
/*
is_app(true)
control_type("VB")
display_name("Shapes control")
description("This will return the shapes control")
base_component_id("shapes_control")
load_once_from_file(true)
visibility("PRIVATE")
read_only(true)
properties(
    [
        {
            id:     "text",
            name:   "Text",
            type:   "String"
        }
        ,
        {
            id:     "background_color",
            name:   "Background color",
            default:    "blue",
            type:   "String"
        }
        ,
        {
            id:         "shape",
            name:       "Shape",
            type:       "Select",
            default:    "square",
            values:     [
                            {display: "Square",   value: "square"},
                            {display: "Circle",  value: "circle"}
                        ]
        }
    ]
)//properties
logo_url("/driver_icons/shapes.png")
*/

    Vue.component("shapes_control",{
      props: ["args"]
      ,
      template: `<div v-bind:style='"height:100%;width:100%; border: 0px;" +
                                    "background-color: "+    args["background_color"]  + ";" +
                                    ((args.shape == "circle")?"border-radius: 50%;":"border-radius: 0%;") +
                                    ";"'>


                 </div>`
      ,
      data: function() {
       return {
         msg: "..."
     }
      },
    })
}
