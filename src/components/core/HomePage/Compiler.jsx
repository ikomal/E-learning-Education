
export default function Compiler()
{
    function run()
{
    let html=document.getElementById('html-code').value
    let css=document.getElementById('css-code').value
    let js=document.getElementById('js-code').value
    let output=document.getElementById('output')
    output.contentDocument.body.innerHTML=html+"<style>"+css+"</style>";
    output.contentWindow.eval(js);
   

}
    return(
        <div className="compile-container">
        <div className="compile-left">
           <label>HTML</label>
           <textarea name="" id="html-code" onkeyup={run} ></textarea>

           <label>CSS</label>
           <textarea name="" id="css-code" onkeyup={run} ></textarea>

           <label>JAVASCRIPT</label>
           <textarea name="" id="js-code" onkeyup={run} ></textarea>
        </div>
        <div class="compile-right">
            <label for="">Output</label>
            <iframe src="" frameborder="0" id="output">heelo</iframe>
        </div>
    </div>
    )
}