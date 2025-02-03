# echo 1
# echo `date`
# cd weko-deposit
# tox > weko-deposit.txt
# cd ..

# echo 2
# echo `date`
# cd weko-records
# tox > weko-records.txt
# cd ..

echo 3
echo `date`
cd weko-records-ui
tox > weko-records-ui.txt
cd ..

echo 4
echo `date`
cd weko-workflow
tox > weko-workflow.txt
cd ..

echo 5
echo `date`
cd weko-search-ui
tox > weko-search-ui.txt

echo `date`
echo 6
