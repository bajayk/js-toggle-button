class ToggleButton{

    constructor(id){
        this.id = id;
        this.element = document.getElementById(id);
        this.handle = this.element.getElementsByClassName('handle')[0];
        this.state = 'off';
        this.element.addEventListener('click', this.on_click.bind(this));
    }

    on_click(e){
        console.log("Clicked");
        if(this.state == 'off'){
            this.handle.style.animationName = "kf-toggle-on";
            this.state = 'on';
        }else{
            this.handle.style.animationName = "kf-toggle-off";
            this.state = 'off';
        }
    }

}