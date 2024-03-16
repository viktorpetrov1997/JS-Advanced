function printSquareOfStars(size = 5) 
{
    for (let row = 0; row < size; row++) 
    {
      let line = '';
      for (let col = 0; col < size; col++) 
      {
        line += ' *';
      }
      console.log(line);
    }
}

printSquareOfStars(4);