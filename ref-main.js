const data1 = [55000, 48000, 27000, 66000, 90000];

// Add a new frame for this new visualization
const FRAME2 = d3.select("#vis2") //add a new div for this vis
                                    // to your html 
                  .append("svg")
                    .attr("width", FRAME_WIDTH)
                    .attr("height", FRAME_HEIGHT)
                    .attr("class", "frame"); 

// Add point for each datum in data1                 
FRAME2.selectAll("points") //select all points in FRAME2
                            //  Note: this is weird! There are
                            //  no points in FRAME2 yet.  
      .data(data1)  //specifies data to use  
      .enter()  //starts a loop through the data. All following
                  // code is applied to data1[0], data1[1], etc.     
      .append("circle") // append a circle for each datum  
        .attr("cx", (d) => { return d; }) // anonymous function.
                                          // sets x pos to datum
                                          // for each row in data1
        .attr("cy", 0) // since we have a 1d dataset, use 0
        .attr("r", 20)
        .attr("class", "point"); 

// The above code does not take into account margins! Let's 
// redo that chunk, accounting for margins

// Now, rebuild 
FRAME2.selectAll("points")  
    .data(data1)  
    .enter()       
    .append("circle")  
      .attr("cx", (d) => { return (d + MARGINS.left); }) 
      .attr("cy", MARGINS.top) 
      .attr("r", 20)
      .attr("class", "point"); 

//###############################################################
// Mapping pixels to data   
// In addition to binding data to svg's d3 will do the math 
// to map data values to pixel values.  
//###############################################################
