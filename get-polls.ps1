$polls = Invoke-RestMethod "http://projects.fivethirtyeight.com/polls/polls.json"

$polls.Content | Out-File polls.json
