const url =
  "https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=music&videoEmbeddable=true&videoSyndicated=true&maxResult=6&key=AIzaSyDGjgAG8U7cO5UGpb1F4zK5QpleSCpv9Rk";

$(() => {
  $.ajax({
    url: url,
    dataType: "jsonp",
  })
    .done((data) => {
      if (data.items) {
        setData(data);
      } else {
        alert("おや？データが見つかりませんね...");
      }
    })
    .fail(() => alert("通信に失敗しました。\nもう一度読み込んでください。"));
});

function setData(data) {
  let result = "";
  let video;
  for (let n = 0; n < data.items.length; n++) {
    video = `<iframe src="https://www.youtube.com/embed/${data.items[n].id.videoId}" allowfullscreen></iframe>`;
    result = `<div class="video">${video}</div>`;
  }

  $("#videoList").html(result);
}
