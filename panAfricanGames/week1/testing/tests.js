expect(document.getElementsByTagName('tag')[0].innerHTML).not.toBeNull();

expect(document.title).toBe('nothing');
expect(document.querySelector('p')).toHaveCss({'property': 'value'});
expect('div').toExist();
expect('tag').toHaveText('words');
expect(document.getElementsByTagName('tag')).toEqual(4);
expect('link')[1].toHaveAttr('href', 'styles.css');
expect('#foo' ).toHaveCss( { 'border-left-color' : '#FF0000'  } );

var skippedLink = HTMLHeadElement.querySelector('')