let btn = document.querySelector('#new-quote');
            let quote=document.querySelector('.quote');
            let person=document.querySelector('.person');
            const quotes=[{
                quote:"Success is not final, failure is not fatal: it is the courage to continue that counts",
                person:' Winston Churchill',
            },
        {
            quote:'Knowing yourself is the beginning of all wisdom',
        person:' Aristotle'
        },
        {
 quote:'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that',
        person:'Martin Luther King Jr.'
        },
        {
 quote:'Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin',
        person:'Mother Teresa '
        },
      {
        quote:'A person who never made a mistake never tried anything new',
        person:'Albert Einstein',
      },]
        btn.addEventListener('click',function(){
            let random=Math.floor(Math.random()*quotes.length);
            quote.innerText=quotes[random].quote;
            person.innerText=quotes[random].person;
        })