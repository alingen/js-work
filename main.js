(() => {
  'use strict';

  let todoAllCount = 0;
  const e = document.getElementById('create');
  const listElement = document.getElementById('list');

  //保存する
  e.addEventListener('click', (e) => {
    e.preventDefault();
    //フォームの値を取得
    const inputElm = document.querySelector('#js-form-input');
    
    //<li></li>をつくる
    const li = document.createElement('li');

    //todoの中身をつくる
    const todoItem = document.createElement('label');
    const itemText = document.createTextNode(inputElm.value);
    todoItem.appendChild(itemText);

    //checkboxをつくる
    const checkbox = document.createElement('input');
    checkbox.setAttribute('class', 'checkbox');
    checkbox.type = 'checkbox';

    //checkboxでカウント変更する
    checkbox.addEventListener('change', (evt) => {
      evt.preventDefault();
      let $check = document.getElementsByClassName("checkbox");
      let num = 0;
      for (let i = 0; i < $check.length; i++) {
        if ($check[i].checked) {
          num++;
        }
      }
      //完了済みのタスク数変更
      const todoDoneCountElm = document.getElementById('js-done-task');
      todoDoneCountElm.textContent = `完了済み:${num}`;
      //未完了のタスク数変更
      const todoNotDoneCountElm = document.getElementById('js-not-done-task');
      todoNotDoneCountElm.textContent = `未完了:${$check.length - num}`;
    });
    
    //削除ボタンをつくる
    const inputDel = document.createElement('button');
    inputDel.innerHTML = '削除';

    //削除ボタンに削除機能をつける
    inputDel.addEventListener('click', (evt) => {
      evt.preventDefault();

      //アラートをつける
      alert('本当にいいんですか？');

      const $target = evt.currentTarget;
      const $parentElement = document.getElementById('list');
      $parentElement.removeChild($target.closest('li'));

      //カウント１減らす
      todoAllCount -= 1;
      const todoAllCountElm = document.getElementById('js-all-count');
      todoAllCountElm.textContent = `すべてのタスク：${todoAllCount}`;

      let $check = document.getElementsByClassName("checkbox");
      let num = 0;
      for (let i = 0; i < $check.length; i++) {
        if ($check[i].checked) {
          num++;
        }
      }
      //完了済みのタスク数変更
      const todoDoneCountElm = document.getElementById('js-done-task');
      todoDoneCountElm.textContent = `完了済み:${num}`;
      //未完了のタスク数変更
      const todoNotDoneCountElm = document.getElementById('js-not-done-task');
      todoNotDoneCountElm.textContent = `未完了:${$check.length - num}`;
    }, false);

    //編集ボタンをつくる
    const inputUp = document.createElement('button');
    const updateItemElm = document.createElement('input');
    updateItemElm.setAttribute('type','text');
    const updateButton = document.createElement('button');
    inputUp.innerHTML = '編集';
    updateButton.innerHTML = '更新'
    updateItemElm.classList.add('hide');
    updateButton.classList.add('hide');

    //編集ボタンの機能追加
    inputUp.addEventListener('click', (evt) => {
      evt.preventDefault();
      const $target = evt.currentTarget;
      const $oldItem = $target.parentNode.getElementsByTagName('label')[0];
      updateItemElm.value = `${$oldItem.textContent}`;
      checkbox.classList.add ('hide');
      inputDel.classList.add('hide');
      inputUp.classList.add('hide');
      todoItem.classList.add('hide');
      updateItemElm.classList.remove('hide');
      updateButton.classList.remove('hide');

      //更新ボタン追加
      updateButton.addEventListener('click',() => {
        const $newItem = updateItemElm.value;
        console.log(updateItemElm.value);
        checkbox.classList.remove('hide');
        inputDel.classList.remove('hide'); 
        inputUp.classList.remove('hide');
        todoItem.classList.remove('hide');
        updateItemElm.classList.add('hide');
        updateButton.classList.add('hide');

        $oldItem.textContent = $newItem;
      });
    });

    //listの中にli入れる
    listElement.appendChild(li);

    //liの中に要素入れる
    li.appendChild(checkbox);
    li.appendChild(todoItem);
    li.appendChild(inputDel);
    li.appendChild(inputUp);
    li.appendChild(updateItemElm);
    li.appendChild(updateButton);

    //すべてカウントする
    todoAllCount += 1;
    const todoAllCountElm = document.getElementById('js-all-count');
    todoAllCountElm.textContent = `すべてのタスク：${todoAllCount}`;

    //todo追加したときに未完了のカウントを増やす
    let $check = document.getElementsByClassName("checkbox");
    let num = 0;
    for (let i = 0; i < $check.length; i++) {
      if ($check[i].checked) {
        num++;
      }
    }
    //完了済みのタスク数変更
    const todoDoneCountElm = document.getElementById('js-done-task');
    todoDoneCountElm.textContent = `完了済み:${num}`;
    //未完了のタスク数変更
    const todoNotDoneCountElm = document.getElementById('js-not-done-task');
    todoNotDoneCountElm.textContent = `未完了:${$check.length - num}`;

    //入力欄を空にする
    inputElm.value = '';

  }, false);


})();

