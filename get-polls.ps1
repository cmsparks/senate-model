$polls = Invoke-WebRequest "http://projects.fivethirtyeight.com/polls/polls.json"

$polls.Content | Out-File polls.json
