// 💬 a variable 'text' is being declared and assigned a value, which is a string value.
let text = "If you really want to hear about it, the first thing you'll probably want to know is where I was born, an what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth. In the first place, that stuff bores me, and in the second place, my parents would have about two hemorrhages apiece if I told anything pretty personal about them. They're quite touchy about anything like that, especially my father. They're nice and all but they're also touchy as hell. Besides, I'm not going to tell you my whole goddam autobiography or anything. I'll just tell you about this madman stuff that happened to me around last Christmas just before I got pretty run-down and had to come out here and take it easy. I mean that's all I told DB about, and he's my brother and all. He's in Hollywood. That isn't too far from this crumby place, and he comes over and visits me practically every week end. He's going to drive me home when I go home next month maybe. He just got a Jaguar. One of those little English jobs that can do around two hundred miles an hour. It cost him damn near four thousand bucks. He's got a lot of dough, now. He didn't use to. He used to be just a regular writer, when he was home. He wrote this terrific book of short stories, The Secret Goldfish, in case you never heard of him. The best one in it was The Secret Goldfish. It was about this little kid that wouldn't let anybody look at his goldfish because he'd bought it with his own money. It killed me. Now he's out in Hollywood";

// 💬 an array 'words' is being declared and assigned multiple values, all the individual words in the text variable. This is done by splitting the text variable at each space
let words = text.split(" ");

// 💬 all the words in the 'words' array are mapped to have all characters in lowercase
words = words.map( word => word.toLowerCase() );

// 💬 the words array is mapped with an anonymous function
words = words.map( function(word){
    return word
        .replaceAll(".", "")    // 💬 all . in the 'words' array are replaced by "", meaning they are deleted.
        .replaceAll(",", "");   // 💬all , in the 'words' array are replaced by "", meaning they are deleted.
});

// 💬 create an empty object called lookup
let lookup = {};

// 💬 for loop that goes through the whole words array, and assigns every word from every index to a variable word, in turn, one per loop
for ( let i = 0; i < words.length; i++ ){
    let word = words[i];

    // 💬creates variable firstLetter and assigns a single string, the letter the current word starts with
    let firstLetter = word.charAt(0);

    // 💬 checks if the lookup object already has a property, or section, for the firstLetter in turn. If it doesn't, a new property, or section is created with the name
    // of firstLetter. It is assigned an empty array, into which we will later push words that start with that letter.
    if ( !lookup.hasOwnProperty(firstLetter) ){
        lookup[firstLetter] = [];
    }

    // 💬 we push the word in turn into the lookup property that matches the letter it starts with.
    lookup[firstLetter].push(word);
}

// 💬a for loop that loops through all the letters that are properties in lookup
for ( firstLetter in lookup ){
   let entry = lookup[firstLetter];

   // 💬 filters all items in entry, if the index of an item passed in is equal to the index passed in.
   entry = entry.filter((item, index) => entry.indexOf(item) === index);

   // 💬 sorts entry alphabetically
   entry = entry.sort();

   // 💬 equals lookup firstLetter to entry
   lookup[firstLetter] = entry;
}

// 💬 for loop that logs the complete list of all sorted words to the console
for ( letter of Object.keys(lookup).sort() ){
    console.log(letter, lookup[letter]);
}
