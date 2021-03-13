const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),

    registerAnswer(){
        let answer=Number(prompt(`${this.question}\n
        ${this.options.join('\n')}\n Write option number`))
        console.log(answer)
        //register number
        typeof answer==='number' && answer < this.answers.length && this.answers[answer]++;
        console.log(this.answers)
         this.displayResults(prompt('which type string or array'))
        },
        displayResults(type='array'){
            if(type==='array'){
                console.log(this.answers)
            }else if(type==='string'){
                console.log(`Poll results are ${[...this.answers]}`)
            }
        }
};



///registerAnswer ta ki this alwasys engaged oldugu elemani kabul eder bunu onlemek icin bind ile icinde object ismi yazyrz diyrz ki senin this'in bu   
  document.querySelector('.poll')
  .addEventListener('click',poll.registerAnswer.bind(poll))
    


///call function yine this icin kullanlyr displayREsults answers kullanyr methodun icinde bizde call icine this olarak kullancagi objecti yazdik ve ayni isimde yani answers isminde kullanacagi property'i de verdik sonra type'i kullanmasi icin de string yazdim
 poll.displayResults.call({answers:[5,3,2,1]},'string') 


 poll.displayResults.call({answers:[5,3,2,1,2,3,4,5]},'string') 