<script context="module">
</script>


<div class="container">
  <div class="styled-box" style="width: 500px; height: 500px;">
    <div class="grid-container">
      <h5 class="text-center">Карточка участника создана!</h5>
      <div class="text-center">
        <img src="/img/createdSanta.svg" alt="santa_thum" width="300" height="300">
      </div>
      <p class="text-center">Вам придет уведомление, как только Организатор проведет жеребьевку</p>
    </div>
    <div class="stack">
      <a href="/" class="main-button1" style="margin-top: 30px; margin-left: 150px; width: 180px; height: 50px;">На главную</a>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .styled-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #f0f0f0;
    border-radius: 10px;
  }

  .grid-container {
    width: 100%;
    text-align: center;
  }

  .text-center {
    text-align: center;
  }

  .main-button1 {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }

  .stack {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
</style>
