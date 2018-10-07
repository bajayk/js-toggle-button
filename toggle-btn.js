class ToggleButton{

    constructor(id){
        this.id = id;

        // get element
        this.element = document.getElementById(id);

        // get handle element
        this.handle = this.element.getElementsByClassName('handle')[0];

        // Set initial stage of button
        this.state = 'off';

        // Add the click event to the element to toggle on off button
        this.element.addEventListener('click', this.on_click.bind(this));
    }

    // Click handler to on off button
    on_click(e){
        
        // Switch ON button if state is OFF by assigning a ON animation
        if(this.state == 'off'){
            this.handle.style.animationName = "kf-toggle-on";
            this.state = 'on';
        }else{ // Switch OFF button if state is ON by assigning a OFF animation
            this.handle.style.animationName = "kf-toggle-off";
            this.state = 'off';
        }
    }

}