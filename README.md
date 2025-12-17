To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000


Example Post Request:
curl -X POST https://santas_stats-api.santasstats.workers.dev/api/santas_stats \
  -H "Content-Type: application/json" \
  -d '{
    "item": "toy train",
    "timeToFulfill": 120,
    "countryOfDelivery": "USA",
    "elfApprovalRating": 95
  }'

